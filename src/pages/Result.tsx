import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FaceBox from '../components/common/Face';
import ChatBoxResult from '../components/common/ChattingResult';
import { baseInstance } from '../api/config';
import { BackIconSvg } from '../assets/SVG';
import ChatHistoryInfo from '../components/common/ChatHistoryInfo';

interface Data {
  content: {
    Question?: string;
    child?: string;
  }[];
  picture?: string;
}

export default function Result() {
  const chatRoomId = window.localStorage.getItem('chat_id');
  const [isMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );
  const [data, setData] = useState<Data | null>(null);
  const navigate = useNavigate();
  const GoToBefore = () => {
    navigate('/diary');
  };

  const content = data?.content;
  const picture = data?.picture;
  const location = useLocation();
  const {YY, MM, DD} = location.state;
  const date = `${YY}년 ${MM}월 ${DD}일`;

  useEffect(() => {
    baseInstance
      .get(`/apps/chat_list/${chatRoomId}/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BackGround>
      <Layout>
      {picture && <ChatHistoryInfo date={date} picture={picture} />}
        {isMobile ? (
          <>
            <QuitChatBtn onClick={GoToBefore}>
              <BackIconSvg />
              뒤로가기
            </QuitChatBtn>
            <ComponentsWrapper>
              <ChatBoxResult content={content} />
            </ComponentsWrapper>
          </>
        ) : (
          <>
            <ComponentsWrapper>
              <FaceBox picture={picture} />
              <ChatBoxResult content={content} />
            </ComponentsWrapper>
            <QuitChatBtn onClick={GoToBefore}>
              뒤로가기
              <ButtonImage src="src/assets/img/QuitIcon.png" />
            </QuitChatBtn>
          </>
        )}
      </Layout>
    </BackGround>
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
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 10.5rem; */
  
  @media all and (min-width: 391px) {
    flex-direction: row;
    margin-left: 11.06rem;
    margin-right: 8.62rem;
    gap: 5.3rem;
  }
  @media all and (max-width: 390px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.75rem;
    margin-bottom: 3rem;
    height: 30rem;
    gap: 1rem;
  }
`;

const QuitChatBtn = styled.div`
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
    gap: 0.5rem;
    top: 1rem;
    left: 1rem;
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
