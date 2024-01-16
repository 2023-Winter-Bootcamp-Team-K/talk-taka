import styled from 'styled-components';
import Calender from '../components/calender/Calender';
import Diary from '../components/common/Diary';
import { useQuery } from 'react-query';
import { getDiary } from '../api/diary';

export default function DiaryPage() {
  const diaryId = '1'; 

  const { data: diaryData } = useQuery([diaryId], () => getDiary(diaryId));

  const diaryContent = diaryData?.diaryContent;
  const imageURL = diaryData?.imageURL;
  const [YY, MM, DD] = diaryData?.created_at ? diaryData.created_at.split('-') : ['-', '-', '-'];
  const mood = diaryData?.mood; 


  return (
    <>
      <BackGround>
        <Book>
          <Left>
            <Calender />
          </Left>
          <Right>
            <Diary
              YY={YY}
              MM={MM}
              DD={DD}
              Text={diaryContent}
              Image={imageURL}
              mood={mood}
            />
          </Right>
        </Book>
      </BackGround>
    </>
  );
}


const BackGround = styled.div`
  background-image: url('./assets/img/Chat_bg.png'); // 이미지 경로 수정
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
  background-image: url('./assets/img/book.png'); // 이미지 경로 수정
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
