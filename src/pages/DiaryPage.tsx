import styled from 'styled-components';
import Calender from '../components/calender/Calender';
import Diary from '../components/common/Diary';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackIconSvg } from '../assets/SVG';

export default function DiaryPage() {
  const navigate = useNavigate();

  const GoToMain = () => {
    navigate('/main');
  };
  const GoToResult = () => {
    navigate('/result');
  };
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 390px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 390px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    handleResize();
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <>
      <BackGround>
        {isMobile ? (
          <>
            <QuitChatBtn onClick={GoToMain}>
              <BackIconSvg />
              뒤로가기
            </QuitChatBtn>
            <Right>
              <Diary />
            </Right>
            <ViewChatBtn onClick={GoToResult}>
              <ButtonImage src="src/assets/img/HeartBubble.png" />
              이날의 대화 기록 보러가기
            </ViewChatBtn>
          </>
        ) : (
          <>
            <Book>
              <Left>
                <Calender />
              </Left>
              <Right>
                <Diary />
              </Right>
            </Book>
            <ViewChatBtn onClick={GoToResult}>
              <ButtonImage src="src/assets/img/HeartBubble.png" />
              이날의 대화 기록 보러가기
            </ViewChatBtn>
            <QuitLayout>
              <QuitChatBtn onClick={GoToMain}>
                <ButtonImage src="src/assets/img/QuitIcon.png" />
                뒤로가기
              </QuitChatBtn>
            </QuitLayout>
          </>
        )}
      </BackGround>
    </>
  );
}

const QuitLayout = styled.button`
  all: unset;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 3rem;
  width: 100%;
  height: 3rem;
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

const BackGround = styled.div`
  background-image: url('src/assets/img/Chat_bg.png');
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 390px) {
    background-image: url('src/assets/img/Diary_bg.png');
  }
`;

const Book = styled.div`
  background-image: url('src/assets/img/book.png');
  width: 73.75rem;
  height: 53.125rem;
  margin-top: 3rem;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 3rem;
  padding-top: 6rem;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  @media all and (min-width: 391px) {
    padding-top: 6rem;
    padding-left: 7.5rem;
  }
  @media all and (max-width: 390px) {
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 1.25rem;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.5);
  }
`;

const ViewChatBtn = styled.button`
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
  font-size: 1rem;
  gap: 0.2rem;

  @media all and (min-width: 391px) {
    bottom: 9rem;
    right: 12rem;
  }
  @media all and (max-width: 390px) {
    bottom: 7rem;
    right: 1.44rem;
  }
`;
