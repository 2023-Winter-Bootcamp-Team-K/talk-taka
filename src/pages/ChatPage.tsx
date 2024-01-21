import { styled } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import Modal from '../components/modal/Modal';
import CharComponent from '../components/common/CharComponent';
import CameraBox from '../components/common/Camera';
import ChatBox from '../components/common/Chatting';
import ChatInfo from '../components/common/ChatInfo';
import { toggleStore } from '../stores/toggle';
import CameraModal from '../components/modal/CameraModal';
import { baseInstance } from '../api/config';
import { getCookie } from '../utils/cookie';
import { useChatStore } from '../stores/chat';

export default function ChatPage() {
  // 웹소켓?
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const { RecordToggle, setRecordToggle, audio, setSendAudio, sendAudio } =
    useChatStore();

  const Mood = window.localStorage.getItem('mood');

  //대화 배열
  // const chatArray: any = [];
  //대화 객체
  const chatArrayFinal = new Array();

  const onSubmit = async () => {
    const token = getCookie('token');

    try {
      const response = await baseInstance.post(
        `/diary/`,
        { mood: Mood },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.status === '201') {
        window.localStorage.setItem('diaryId', response.data.diaryId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [close, setclose] = useState(false);
  const connectWebSocket = () => {
    const roomId = window.localStorage.getItem('chat_id');

    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

    let chatArray = new Array();

    ws.onopen = () => {
      // 웹소켓 시작 설정
      setSocketConnected(true);
      setSocket(ws);
    };
    console.log('connected to room' + roomId);

    ws.onclose = () => {
      console.log('disconnect from room :' + roomId);
      setSocketConnected(false);
    };
    ws.onerror = () => {
      console.log('connection error to' + roomId);
      setSocketConnected(false);
    };

    ws.onmessage = (event) => {
      const messageReceived = JSON.parse(event.data);
      const messageEvent = messageReceived.event;
      const checkFinish = messageReceived.data.finish_reason;

      if (messageEvent === 'conversation') {
        chatArray.push(messageReceived.data.message);
        const chat = chatArray.join('');
        if (checkFinish === 'stop') {
          chatArray = [];

          //쿼카 메세지
          if (messageReceived.data.character === 'quokka') {
            const data = {
              character: 'quokka',
              message: chat,
            };
            chatArrayFinal.push(data);
          }
          //아이 메세지
          if (messageReceived.data.character === 'child') {
            const data = {
              character: 'chile',
              message: chat,
            };
            chatArrayFinal.push(data);
          }
        }
      } else if (messageEvent === 'question_tts') {
        console.log(chatArrayFinal);

        const audioBlob = messageReceived.data.audioBlob;
        let snd = new Audio(`data:audio/x-wav;base64, ${audioBlob}`);
        snd.play();
        snd.addEventListener('loadedmetadata', (event) => {
          const sndElement = event.currentTarget as HTMLAudioElement;
          const QuokkaTime = sndElement.duration * 1000;
          console.log('시간지연 테스트', QuokkaTime);
          setTimeout(() => {
            console.log('쿼카 말 끝남');
            setRecordToggle(true); //true 인데
            console.log('RecordToggle(true 여야함): ', RecordToggle); //false래 말이 됨?
            console.log('레코드 시작1');
          }, QuokkaTime);
        });
      }
    };
  };

  // 웹소켓 시작
  const startWebSocket = () => {
    const ws = socket;
    if (socketConnected === true && ws) {
      const data = {
        event: 'conversation_start',
        data: {
          mood: Mood,
        },
      };
      ws.send(JSON.stringify(data));
    }
  };

  //웹소켓 종료
  const endWebSocket = () => {
    const ws = socket;
    if (close === true && ws) {
      ws.close(1000, '해결');
      ws.onclose = () => {
        console.log('disconnect from room ');
      };
    }
  };

  //오디오 전달
  const sendAudioWebSocket = () => {
    //ERROR : 오디오 전달할 blob이 없어 오류 발생
    // console.log(audio);

    // console.log('audio recording success:', audioBlob);
    // const audioUrl = URL.createObjectURL(audioBlob);
    // const audio = new Audio(audioUrl);
    // audio.play();
    const ws = socket;
    if (sendAudio === true && ws) {
      console.log(audio);

      const data = {
        event: 'user_answer',
        data: { audioBlob: audio },
      };

      ws.send(JSON.stringify(data));
      setSendAudio(false);
      setRecordToggle(false);
    }
  };

  const { toggle } = toggleStore();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );
  const [showChar, setShowChar] = useState(false); // 이거 원래 true 임
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    startWebSocket();
  };
  const handleShowChar = () => {
    setShowChar(true);
  };

  const handleQuitChat = () => {
    onSubmit();
    setclose(true);
    endWebSocket();

    setIsCameraModalOpen(true);
  };

  //마이크 테스트

  //getItem from local storage

  useEffect(() => {
    sendAudioWebSocket();
  }, [sendAudio]);

  useEffect(() => {
    connectWebSocket();
    const mediaQuery = window.matchMedia('(max-width: 390px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    handleResize();
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return socketConnected ? (
    <BackGround>
      {isModalOpen && <Modal modalConfirm={handleModalConfirm} />}
      <Layout>
        <ChatInfo />
        {isMobile ? (
          showChar && toggle === '1' ? (
            <ComponentsWrapper>
              <CharComponent />
            </ComponentsWrapper>
          ) : (
            // 핸드폰 모드
            <ComponentsWrapper>
              {toggle === '1' ? (
                <CameraBox isShowChar={handleShowChar} />
              ) : (
                <ChatBox isShowChar={handleShowChar} />
              )}
            </ComponentsWrapper>
          )
        ) : (
          // 컴퓨터 모드
          <ComponentsWrapper>
            <CharComponent />
            {toggle === '1' ? (
              <CameraBox isShowChar={handleShowChar} />
            ) : (
              <ChatBox isShowChar={handleShowChar} />
            )}
          </ComponentsWrapper>
        )}
      </Layout>
      {isCameraModalOpen && <CameraModal />}
      <QuitChatBtn onClick={handleQuitChat}>
        대화 끝내기
        <ButtonImage src="src/assets/img/QuitIcon.png" />
      </QuitChatBtn>
    </BackGround>
  ) : (
    <div>다시 시도 하시옹</div>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 391px) {
    margin-top: 6rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 3.3rem;
  }
`;

const BackGround = styled.div`
  position: relative;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media all and (min-width: 391px) {
    background-image: url('src/assets/img/Chat_bg.png');
    background-position-x: 50%;
    background-position-y: 75%;
    width: 100vw;
    height: 100vh;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  @media all and (max-width: 390px) {
    background-color: #ffe79a;
    background-position: center;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
  }
`;

const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5.3rem;
  /* margin-top: 10.5rem; */

  @media all and (min-width: 391px) {
    margin-left: 11.06rem;
    margin-right: 8.62rem;
  }
  @media all and (max-width: 390px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.75rem;
    margin-bottom: 10.06rem;
    height: 30rem;
  }
`;

const QuitChatBtn = styled.button`
  all: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    bottom: 1rem;
    right: 23px;
    height: 1.5rem;
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    bottom: 1rem;
    right: 23px;
    height: 1.5rem;
    font-size: 1.125rem;
  }
`;

const ButtonImage = styled.img`
  @media all and (min-width: 391px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media all and (max-width: 390px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
