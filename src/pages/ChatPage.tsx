import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from '../components/modal/Modal';
import CharComponent from '../components/common/CharComponent';
import CameraBox from '../components/common/Camera';
import ChatBox from '../components/common/Chatting';
import ChatInfo from '../components/common/ChatInfo';
import { toggleStore } from '../stores/toggle';

export default function ChatPage() {
  const { toggle } = toggleStore();

  // const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );
  const [showChar, setShowChar] = useState(true);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
  };
  const handleShowChar = () => {
    setShowChar(true);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 390px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    handleResize();
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <BackGround>
      {isModalOpen && <Modal modalConfirm={handleModalConfirm} />}

      {isMobile ? (
        showChar ? (
          <ComponentsWrapper>
            <CharComponent />
          </ComponentsWrapper>
        ) : (
          <ComponentsWrapper>
            {toggle ? (
              <CameraBox isShowChar={handleShowChar} />
            ) : (
              <ChatBox isShowChar={handleShowChar} />
            )}
          </ComponentsWrapper>
        )
      ) : (
        <Layout>
          <ChatInfo />
          <ComponentsWrapper>
            <CharComponent />
            {toggle ? (
              <CameraBox isShowChar={handleShowChar} />
            ) : (
              <ChatBox isShowChar={handleShowChar} />
            )}
          </ComponentsWrapper>
        </Layout>
      )}

      <QuitChatBtn onClick={goToMain}>
        대화 끝내기
        <ButtonImage src="src/assets/img/QuitIcon.png" />
      </QuitChatBtn>
    </BackGround>
  );
}

const Layout = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
`;

const BackGround = styled.div`
  position: relative;
  margin: auto;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media all and (min-width: 391px) {
    background-image: url('src/assets/img/Chat_bg.png');
    background-position-x: 50%;
    background-position-y: 75%;
    width: 100vw;
    height: 100vh;
  }
  @media all and (max-width: 390px) {
    background-color: #ffe79a;
    background-position: center;
    width: 100vw;
    height: 100vh;
  }
`;

const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5.3rem;
  /* margin-top: 10.5rem; */
  margin-left: 11.06rem;
  margin-right: 8.62rem;

  @media all and (min-width: 391px) {
  }
  @media all and (max-width: 390px) {
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
