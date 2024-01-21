import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MicGIF from '../gif/Mic';
import { useChatStore } from '../../stores/chat';

// 변수
type AudioRecorderProps = {
  isShowChar: () => void;
};

// 이게 나가는건데
export default function AudioRecorder({ isShowChar }: AudioRecorderProps) {
  // const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  //zustand 상태관리
  const { RecordToggle, setRecordToggle, setAudio, setSendAudio } =
    useChatStore();

  // const { socketConnected } = useChatStore();
  // const { socket } = useChatStore();
  // const {isShowChar, setIsShowChar} = useChatStore();

  // 버튼 클릭 핸들러
  const handleButtonClick = () => {
    setRecordToggle(false); // true이면 녹음 시작
    toggleRecording(); // 이거 뭐지?
    setSendAudio(true); // 오디오 보내기 상태관리
    isShowChar(); // 이거 존재 유무 불명
  };

  useEffect(() => {
    toggleRecording();
    console.log('ToggleRecording useEffect: ', RecordToggle);
  }, []);

  // 녹화 토글
  const toggleRecording = async () => {
    if (RecordToggle && mediaRecorder) {
      console.log('레코드 시작2');

      mediaRecorder.stop();
      setRecordToggle(false);
    } else {
      console.log('레코드 시작 3'); //ERROR : chatpage 들어오면 바로 실행됨...

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
        // const audioUrl = URL.createObjectURL(audioBlob);
        // const audio = new Audio(audioUrl);
        // audio.play();

        // Blob to Base64 string
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const base64Audio = fileReader.result as string;
          console.log('오디오 설정', base64Audio);
          setAudio(base64Audio);
          // send to server using Web Socket
          // if (socketConnected && socket) {
          //   const data = {
          //     event: 'audio_message',
          //     data: {
          //       audio: base64Audio,
          //     },
          //   };
          //   socket?.send(JSON.stringify(data));
          // }
        };
        fileReader.readAsDataURL(audioBlob);
      });

      setMediaRecorder(newMediaRecorder);
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
