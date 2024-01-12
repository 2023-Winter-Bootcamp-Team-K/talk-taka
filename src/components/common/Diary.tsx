import styled from 'styled-components';

interface DiaryProps {
  feeling?: string;
  YY?: string;
  MM?: string;
  DD?: string;
  Text?: string;
  Image?: string;
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
          <TextL>
            {Text}1978년에 브라이언 커니핸과 데니스 리치가 쓴 "The C Programming
            Language" 교재의 첫 번째 예제가 화면에 "Hello, world!"를 출력하는
            것이었고, 이것이 유명해지면서 모든 프로그래밍 언어의 첫번째 예제로
            굳어지게 되었다.[3][4]
          </TextL>
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
  width: 9%;
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
