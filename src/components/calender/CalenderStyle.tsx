import styled from 'styled-components';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const CalendarContainer = styled.div`
  width: 30rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  box-sizing: border-box;
  @media (max-width: 391px) {
    padding: 0rem;
    width: 100%;
    height: 85%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 391px) {
    width: 75%;
    padding: 0;
  }
`;

export const HeaderYear = styled.div`
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 1rem;
  }
`;

export const HeaderDate = styled.div`
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 1.6rem;
  }
`;

export const DateContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ArrowBackIcon = styled(MdOutlineArrowBackIosNew)`
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 391px) {
    font-size: 1.5rem;
  }
`;

export const ArrowForwardIcon = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 391px) {
    font-size: 1.5rem;
  }
`;

export const WeekWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  @media (max-width: 391px) {
    width: 30%;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    letter-spacing: -0.1em;
  }
`;

export const DayName = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const DaysWrap = styled.div<{ rows: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(
    ${(props) => props.rows},
    1fr
  ); // 동적으로 행 수 설정
  background-color: #ddd;
  width: 100%;

  @media (max-width: 391px) {
    width: auto;
    height: auto;
  }
`;

export const DaysCol = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 4.4rem;
  border: 0.01rem solid #ddd;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #f0f0f0;
  }

  &.not-current {
    color: lightgray;
  }

  > div {
    margin-top: 0.5rem;

    @media (max-width: 391px) {
      font-size: 0.8rem;
      margin-top: 0rem;
    }
  }

  @media (max-width: 391px) {
    width: 2.2rem;
    height: 3.2rem;
  }
`;
