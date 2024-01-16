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

export default function ChatPage() {
  // 웹소켓?
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [socketConnected, setSocketConnected] = useState(false);

  const Mood = window.localStorage.getItem('mood');

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWebSocket = () => {
    const roomId = '1';
    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

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
      console.log(event.data);
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

    setIsCameraModalOpen(true);
  };

  //getItem from local storage

  useEffect(() => {
    connectWebSocket();
    const mediaQuery = window.matchMedia('(max-width: 390px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    handleResize();
    return () => mediaQuery.removeEventListener('change', handleResize);
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
