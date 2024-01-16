import styled from 'styled-components';

interface DiaryProps {
  YY: string;
  MM: string;
  DD: string;
  Text: string;
  Image: string;
  mood: string; }

export default function Diary({
  YY,
  MM,
  DD,
  Text,
  Image,
  mood,
}: DiaryProps) {

  const Moods: { [key: string]: string } = {
        joy: 'https://ifh.cc/g/x7AvPq.png',
    sad: 'https://ifh.cc/g/B616mY.png',
    angry: 'https://ifh.cc/g/hKwXAP.png',
  };

  return (
    <DiaryLayout>
      <DayLayout>
        <Day>
          {YY}년 {MM}월 {DD}일
          <Feeling src={Moods[mood]} />
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
  border-radius: 5px;

  @media all and (min-width: 391px) {
    width: 30rem;
    height: 40.25rem;
  }
  @media all and (max-width: 390px) {
    width: 21.5625rem;
    height: 31.1875rem;
  }
`;

const DayLayout = styled.div`
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0);

  display: flex;
  align-items: center;

  @media all and (min-width: 391px) {
    width: 29.9375rem;
    height: 2.875rem;
  }
  @media all and (max-width: 390px) {
    width: 20.39494rem;
    height: 2.07588rem;
  }
`;

const Day = styled.div`
  color: #000;
  text-align: left;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media all and (min-width: 391px) {
    margin-left: 1.31rem;
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    margin-left: 0.69rem;
    font-size: 1.125rem;
  }
`;

const Feeling = styled.img`
  width: 7%;
  height: auto;

  @media all and (min-width: 391px) {
    margin-left: 14rem;
  }
  @media all and (max-width: 390px) {
    margin-left: 9rem;
  }
`;

const PictureLayout = styled.div`
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0);

  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    margin-top: 1.37rem;
    width: 29.9375rem;
    height: 17.9375rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 0.99rem;
    width: 20.39494rem;
    height: 12.95175rem;
  }
`;

const Picture = styled.img`
  box-shadow: 0px 0px 22.1px 2px rgba(0, 0, 0, 0.25);

  @media all and (min-width: 391px) {
    width: 28rem;
    height: 16.75rem;
  }
  @media all and (max-width: 390px) {
    width: 19.075rem;
    height: 12.09431rem;
  }
`;

const DiaryTextLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media all and (min-width: 391px) {
    margin-top: 3.38rem;
    width: 30rem;
    height: 14.6875rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 2.44rem;
    width: 20.4375rem;
    height: 10.60513rem;
  }
`;

const DiaryText = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media all and (min-width: 391px) {
    background-image: url('src/assets/img/Diary_Text.png');
  }
  @media all and (max-width: 390px) {
    background-image: url('src/assets/img/Diary_Text_P.png');
  }
`;

const TextL = styled.div`
  width: 95%;
  height: 95%;
  text-align: justify;
  color: #000;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.25rem;
    line-height: 2;
  }
  @media all and (max-width: 390px) {
    font-size: 0.85rem;
    line-height: 2.1;
  }
`;
