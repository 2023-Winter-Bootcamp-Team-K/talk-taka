import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MicGIF from '../gif/Mic';

type AudioRecorderProps = {
  isShowChar: () => void;
  socket: WebSocket | null;
  socketConnected: boolean;
};

export default function AudioRecorder({
  isShowChar,
  socket,
  socketConnected,
}: AudioRecorderProps) {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const handleButtonClick = () => {
    toggleRecording();
    isShowChar();
  };

  useEffect(() => {
    toggleRecording();
  }, []);

  const toggleRecording = async () => {
    if (recording && mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newMediaRecorder = new MediaRecorder(stream);
      newMediaRecorder.start();

      let audioChunks: Blob[] = [];

      newMediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data);
      });

      newMediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks);

        // test codes
        console.log('audio recording success:', audioBlob);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();

        // Blob to Base64 string
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const base64Audio = fileReader.result as string;

          // send to server using Web Socket
          if (socketConnected && socket) {
            const data = {
              event: 'audio_message',
              data: {
                audio: base64Audio,
              },
            };
            socket?.send(JSON.stringify(data));
          }
        };
        fileReader.readAsDataURL(audioBlob);
      });

      setMediaRecorder(newMediaRecorder);
      setRecording(true);
    }
  };

  return (
    <MicButtonLayout onClick={handleButtonClick}>
      <MicGIF />
    </MicButtonLayout>
  );
}

const MicButtonLayout = styled.button`
  all: unset;
  margin-bottom: 1.19rem;
  @media all and (max-width: 390px) {
    margin-bottom: 1.5rem;
    margin-top: 1.68rem;
  }
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;
