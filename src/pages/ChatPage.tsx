import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/modal/Modal';
import CharComponent from '../components/common/CharComponent';
import CameraBox from '../components/common/Camera';
import ChatBox from '../components/common/Chatting';
import { CameraIconSvg } from '../assets/SVG';

export default function ChatPage() {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleModalConfirm = () => {
    setIsModalOpen(false);
  }

  return (
    <BackGround>
      {isModalOpen && <Modal modalConfirm={handleModalConfirm} />}
      <DateText>
        <TodayDate />
      </DateText>
      <ComponentsWrapper>
        <CharComponent />
        {toggle ? <CameraBox /> : <ChatBox />}
      </ComponentsWrapper>
      <ToggleContainer onClick={handleToggle} toggle={toggle}>
        <Circle toggle={toggle}>
          <CameraIconSvg />
          </Circle>
      </ToggleContainer>
      <QuitChatBtn onClick={goToMain}>
        대화 끝내기
        <ButtonImage src='src/assets/img/QuitIcon.png'/>  
      </QuitChatBtn>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Chat_bg.png');
  position: relative;
  margin: auto;
  width: 1440px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`;

const ToggleContainer = styled.div<{ toggle: boolean }>`
  position: absolute;
  top: 7.56rem;
  right: 15rem;
  width: 4.75rem;
  height: 2rem;
  background: ${(props) => (props.toggle ? '#FF888C' : '#949494')};
  border-radius: 5.96875rem;
  display: flex;
  align-items: center;
  justify-content: 'flex-start';
  padding: 5px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
`;

const Circle = styled.div<{ toggle: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  background: white;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.toggle ? 'translateX(2.9rem)' : '0')};
`;

const DateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 7.56rem;
  right: 21.5rem;
  width: 28rem;
  height: 1.4375rem;

  /* text */
  font-family: Cafe24Dongdong;
  font-size: 1.5rem;
  font-weight: 400;
`;

const QuitChatBtn = styled.button`
  all: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 1rem;
  right: 23px;
  height: 1.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;

  color: #000;
  text-align: center;
  font-family: Cafe24Dongdong;
  font-size: 1.5rem;
  font-weight: 400;
`;

const ButtonImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

const TodayDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return <>{formattedDate}</>;
};
