import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
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
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const { setRecordToggle, audio, setSendAudio, sendAudio } = useChatStore();

  const Mood = window.localStorage.getItem('mood');

  //대화 객체
  interface chatArrayState {
    character: string;
    message: string;
  }

  const chatArrayFinal: Array<chatArrayState> = [];
  const [sendChatArray, setSendChatArray] = useState<chatArrayState[]>([]);

  const onSubmit = async () => {
    const token = getCookie('token');

    try {
      const response = await baseInstance.post(
        `/diary/`,
        {
          mood: Mood,
          chat_room_id: window.localStorage.getItem('chat_id'),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.status === '201') {
        window.localStorage.setItem('selectedDiaryId', response.data.diaryId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [close, setclose] = useState(false);
  const connectWebSocket = async () => {
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

      console.log(messageReceived);

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
            setSendChatArray(chatArrayFinal);
            console.log('쿼카 메세지 setSendChatArray');
          }
          //아이 메세지
          if (messageReceived.data.character === 'child') {
            const data = {
              character: 'child',
              message: chat,
            };
            chatArrayFinal.push(data);
            setSendChatArray(chatArrayFinal);
            console.log('아이 메세지 setSendChatArray');
          }
        }
      } else if (messageEvent === 'question_tts') {
        console.log('tts 시작');

        const audioBlob = messageReceived.data.audioBlob;
        let snd = new Audio(`data:audio/x-wav;base64, ${audioBlob}`);
        snd.play();
        snd.addEventListener('loadedmetadata', (event) => {
          const sndElement = event.currentTarget as HTMLAudioElement;
          const QuokkaTime = sndElement.duration * 1000;
          setTimeout(() => {
            setNewRecordToggle(false);
            setRecordToggle(true);
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
    const ws = socket;
    if (sendAudio === true && ws) {
      const data = {
        event: 'user_answer',
        data: { audioBlob: audio },
      };

      ws.send(JSON.stringify(data));
      setSendAudio(false);
      setRecordToggle(false);
      setNewRecordToggle(true);
    }
  };

  const { toggle } = toggleStore();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    startWebSocket();
  };
  // const handleShowChar = () => {
  //   setShowChar(true);
  // };

  const handleQuitChat = () => {
    onSubmit();
    setclose(true);
    endWebSocket();

    setIsCameraModalOpen(true);
  };

  //마이크 테스트

  const [newRecordToggle, setNewRecordToggle] = useState(true);

  useEffect(() => {
    sendAudioWebSocket();
    setTimeout(() => {
      // setNewRecordToggle(true);
    }, 2000);
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
          // 핸드폰 모드
          newRecordToggle && toggle === '1' ? (
            <ComponentsWrapper>
              <CharComponent />
            </ComponentsWrapper>
          ) : (
            <ComponentsWrapper>
              {toggle === '1' ? (
                <CameraBox />
              ) : (
                <ChatBox sendChatArray={sendChatArray} />
              )}
            </ComponentsWrapper>
          )
        ) : (
          // 컴퓨터 모드
          <ComponentsWrapper>
            <CharComponent />
            {toggle === '1' ? (
              <CameraBox />
            ) : (
              <ChatBox sendChatArray={sendChatArray} />
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
