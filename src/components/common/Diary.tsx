import styled from 'styled-components';

interface DiaryProps {
  feeling: string;
  YY: string;
  MM: string;
  DD: string;
  Text: string;
  Image: string;
}

export default function Diary({
  feeling,
  YY,
  MM,
  DD,
  Text,
  Image,
}: DiaryProps) {
  YY = '2024';
  MM = '12';
  DD = '30';
  feeling = 'Sad';
  //테스트

  //감정 이미지
  const Feelings: { [key: string]: string } = {
    Happy: 'https://ifh.cc/g/x7AvPq.png',
    Sad: 'https://ifh.cc/g/B616mY.png',
    Angry: 'https://ifh.cc/g/hKwXAP.png',
  };

  return (
    <DiaryLayout>
      <DayLayout>
        <Day>
          {YY}년 {MM}월 {DD}일
          <Feeling src={Feelings[feeling]} />
        </Day>
      </DayLayout>
      <PictureLayout>
        <Picture src={Image} />
      </PictureLayout>
      <DiaryTextLayout>
        <DiaryText>
          <TextL>{Text}</TextL>
        </DiaryText>
      </DiaryTextLayout>
    </DiaryLayout>
  );
}

const DiaryLayout = styled.div`
  width: 30rem;
  height: 40.25rem;
`;

const DayLayout = styled.div`
  width: 29.9375rem;
  height: 2.875rem;
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0);

  display: flex;
  align-items: center;
`;

const Day = styled.div`
  margin-left: 1.31rem;

  color: #000;
  text-align: left;
  font-family: 'Cafe24Dongdong';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Feeling = styled.img`
  margin-left: 14rem;
  width: 9%;
  height: auto;
`;

const PictureLayout = styled.div`
  margin-top: 1.37rem;

  width: 29.9375rem;
  height: 17.9375rem;
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 28rem;
  height: 16.75rem;
  box-shadow: 0px 0px 22.1px 2px rgba(0, 0, 0, 0.25);
`;

const DiaryTextLayout = styled.div`
  margin-top: 3.38rem;
  width: 30rem;
  height: 14.6875rem;

  display: flex;
  flex-wrap: wrap;
`;

const DiaryText = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-image: url('src/assets/img/Diary_Text.png');
`;

const TextL = styled.div`
  width: 95%;
  height: 95%;
  text-align: justify;
  color: #000;
  font-family: 'Cafe24Dongdong';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2;
`;
