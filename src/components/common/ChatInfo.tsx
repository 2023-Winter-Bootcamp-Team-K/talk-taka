import { CameraIconSvg } from '../../assets/SVG';
import { styled } from 'styled-components';
import { toggleStore } from '../../stores/toggle';

export default function ChatInfo({}) {
  const { toggle, setToggle } = toggleStore();
  const handleToggle = () => {
    if (toggle === '1') {
      setToggle('0');
    } else {
      setToggle('1');
    }
  };

  return (
    <InfoWrapper>
      <DateText>
        <TodayDate />
      </DateText>
      <ToggleContainer onClick={handleToggle} $toggle={toggle}>
        <Circle $toggle={toggle}>
          <CameraIconSvg />
        </Circle>
      </ToggleContainer>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.7rem;

  @media all and (min-width: 391px) {
    justify-content: right;
    margin-right: 14.5rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 390px) {
    justify-content: right;
    margin-right: 3.25rem;
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

const Circle = styled.div<{ $toggle: string }>`
  background: white;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    width: 1.2rem;
    height: 1.2rem;
    transform: ${(props) =>
      props.$toggle === '1' ? 'translateX(2.9rem)' : '0'};
  }
  @media all and (max-width: 390px) {
    width: 0.97825rem;
    height: 0.97825rem;
    transform: ${(props) =>
      props.$toggle === '1' ? 'translateX(1.78rem)' : '0'};
  }
`;

const ToggleContainer = styled.div<{ $toggle: string }>`
  background: ${(props) => (props.$toggle === '1' ? '#FF888C' : '#949494')};
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

const TodayDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return <>{formattedDate}</>;
};
