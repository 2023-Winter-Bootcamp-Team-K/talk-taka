import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from '../components/modal/Modal';
import CharComponent from '../components/common/CharComponent';
import CameraBox from '../components/common/Camera';
import ChatBox from '../components/common/Chatting';
import { CameraIconSvg } from '../assets/SVG';

export default function ChatPage() {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );
  const [showChar, setShowChar] = useState(true);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleModalConfirm = () => {
    setIsModalOpen(false);
  };
  const handleShowChar = () => {
    setShowChar(true);
  }

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

      <InfoWrapper>
        <DateText>
          <TodayDate />
        </DateText>
        <ToggleContainer onClick={handleToggle} toggle={toggle}>
          <Circle toggle={toggle}>
            <CameraIconSvg />
          </Circle>
        </ToggleContainer>
      </InfoWrapper>

      {isMobile ? (
        showChar ? (
          <ComponentsWrapper>
            <CharComponent />
          </ComponentsWrapper>
        ) : (
          <ComponentsWrapper>
            {toggle ? <CameraBox isShowChar={handleShowChar} /> : <ChatBox isShowChar={handleShowChar}/>}
          </ComponentsWrapper>
        )
      ) : (
        <ComponentsWrapper>
          <CharComponent />
          {toggle ? <CameraBox isShowChar={handleShowChar}/> : <ChatBox isShowChar={handleShowChar}/>}
        </ComponentsWrapper>
      )}

      <QuitChatBtn onClick={goToMain}>
        대화 끝내기
        <ButtonImage src="src/assets/img/QuitIcon.png" />
      </QuitChatBtn>
    </BackGround>
  );
}

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
  margin-top: 10.5rem;
  margin-left: 11.06rem;
  margin-right: 8.62rem;
  
  @media all and (min-width: 391px) {

  }
  @media all and (max-width: 390px) {
  
  }
`;

const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;

  @media all and (min-width: 391px) {
    top: calc(15%);
    left: 74%;
    transform: translate(-50%, -100%);
  }
  @media all and (max-width: 390px) {
    top: 3.56rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ToggleContainer = styled.div<{ toggle: boolean }>`
  background: ${(props) => (props.toggle ? '#FF888C' : '#949494')};
  border-radius: 5.96875rem;
  display: flex;
  align-items: center;
  justify-content: 'flex-start';
  padding: 5px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;

  @media all and (min-width: 391px) {
    width: 4.75rem;
    height: 2rem;
  }
  @media all and (max-width: 390px) {
    width: 3.375rem;
    height: 1.36956rem;
  }
`;

const Circle = styled.div<{ toggle: boolean }>`
  background: white;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    width: 1.2rem;
    height: 1.2rem;
    transform: ${(props) => (props.toggle ? 'translateX(2.9rem)' : '0')};
  }
  @media all and (max-width: 390px) {
    width: 0.97825rem;
    height: 0.97825rem;
    transform: ${(props) => (props.toggle ? 'translateX(1.78rem)' : '0')};
  }
`;

const DateText = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 2rem;
  white-space: nowrap;

  /* text */
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    right: 0;
    left: 0;
    justify-content: center;
    font-size: 1.125rem;
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

const TodayDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return <>{formattedDate}</>;
};
