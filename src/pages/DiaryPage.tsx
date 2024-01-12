import styled from 'styled-components';
import Calender from '../components/calender/Calender';
import Diary from '../components/common/Diary';

export default function DiaryPage() {
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
      </BackGround>
    </>
  );
}

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
  align-items: center;
  justify-content: center;
`;

const Book = styled.div`
  background-image: url('src/assets/img/book.png');
  width: 73.75rem;
  height: 53.125rem;
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
