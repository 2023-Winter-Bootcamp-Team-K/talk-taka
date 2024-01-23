import styled from 'styled-components';
import Calender from '../components/calender/Calender';
import Diary from '../components/common/Diary';
import { useQuery } from 'react-query';
import { getDiary } from '../api/diary';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackIconSvg } from '../assets/SVG';
import { getCookie } from '../utils/cookie';
import { getDiaries } from '../api/calender/calender';

export default function DiaryPage() {
  const selectedDiaryId = window.localStorage.getItem('selectedDiaryId');
  const { data: DiariesData } = useQuery('sales', () => getDiaries(token));
  const diaries = DiariesData?.data;

  const { data: diaryData } = useQuery(['diary', selectedDiaryId], () =>
    getDiary(selectedDiaryId || '')
  );
  // const diaryContent = diaryData;
  // console.log(diaryData)
  const imageURL = diaryData?.imageURL;
  const [YY, MM, DD] = diaryData?.created_at
    ? diaryData.created_at.split('-')
    : ['-', '-', '-'];
  const mood = diaryData?.mood;
  const [chatRoomId, setChatRoomId] = useState(null);
  const navigate = useNavigate();
  const token = getCookie('token');
  const GoToMain = () => {
    navigate('/main');
  };

  const GoToResult = () => {
    navigate('/result', { state: { chatRoomId } });
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

  useEffect(() => {
    if (diaryData) {
      setChatRoomId(diaryData.chat_room_id);
    }
  }, [diaryData]);
  
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
              <Diary
                YY={YY}
                MM={MM}
                DD={DD}
                Text={diaryData?.diaryContent}
                Image={diaryData?.imageURL}
                mood={mood}
              />
            </Right>
          </>
        ) : (
          <>
            <Book>
              <Left>
                <Calender data={diaries} />
              </Left>
              <Right>
                <Diary
                  YY={YY}
                  MM={MM}
                  DD={DD}
                  Text={diaryData?.diaryContent}
                  Image={imageURL}
                  mood={mood}
                />
              </Right>
            </Book>

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

const BackGround = styled.div`
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
  @media all and (min-width: 391px) {
    background-image: url('src/assets/img/Chat_bg.png'); // 이미지 경로 수정
  }

  @media all and (max-width: 390px) {
    background-image: url('src/assets/img/Diary_bg.png');
  }
`;

const Book = styled.div`
  background-image: url('src/assets/img/book.png'); // 이미지 경로 수정
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


