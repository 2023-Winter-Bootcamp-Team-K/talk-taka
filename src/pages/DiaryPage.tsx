import styled from 'styled-components';
import Calender from '../components/calender/Calender';
import Diary from '../components/common/Diary';
import { useNavigate } from 'react-router-dom';

export default function DiaryPage() {
  const navigate = useNavigate();

  const GoToMain = () => {
    navigate('/main');
  };

  return (
    <>
      <BackGround>
        <Book>
          <Left>
            <Calender />
          </Left>
          <Right>
            <Diary />
          </Right>
        </Book>
        <QuitLayout>
          <QuitChatBtn onClick={GoToMain}>
            <ButtonImage src="src/assets/img/QuitIcon.png" />
            뒤로가기
          </QuitChatBtn>
        </QuitLayout>
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
  padding-top: 6rem;
  padding-left: 7.5rem;
`;
