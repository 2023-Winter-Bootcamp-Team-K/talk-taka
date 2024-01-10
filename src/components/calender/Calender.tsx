import React, { useState } from 'react';
import {
  CalendarContainer,
  HeaderContainer,
  HeaderYear,
  HeaderDate,
  WeekWrap,
  DaysWrap,
  DaysCol,
  ArrowBackIcon,
  ArrowForwardIcon,
  DateContainer,
  DayName,
} from './CalenderStyle';

// 실험용 기분 이미지 데이터
const sampleFeelings: { [key: string]: string } = {
  '2024-01-01': 'https://ifh.cc/g/13Ktbk.png',
  '2024-01-02': 'https://ifh.cc/g/13Ktbk.png',
  '2024-01-03': 'https://ifh.cc/g/pscoAZ.png',
  // 추가 날짜와 이미지 URL
};

const Calender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const changeMonth = (offset: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    );
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => <DayName key={index}>{day}</DayName>);
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const prevMonthDays = Array.from(
      { length: firstDayOfMonth },
      (_, index) => {
        const day = prevMonthLastDay - firstDayOfMonth + index + 1;
        return (
          <DaysCol key={`prev-${day}`} className="not-current">
            {day}
          </DaysCol>
        );
      }
    );

    const currentMonthDays = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const dateKey = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      )
        .toISOString()
        .split('T')[0];

      return (
        <DaysCol
          key={`current-${day}`}
          className="current"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {sampleFeelings[dateKey] && (
            <img
              src={sampleFeelings[dateKey]}
              alt="Mood"
              style={{
                width: '130%', // 이미지 크기 조절
                height: 'auto', // 높이 자동 조절
                position: 'absolute',
                top: '5px',
                left: '50%',
                transform: 'translateX(-50%)', // 이미지를 수평 중앙 위치
              }}
            />
          )}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              width: '100%',
              textAlign: 'center',
            }}
          >
            {day}
          </div>
        </DaysCol>
      );
    });

    const totalDays = firstDayOfMonth + daysInMonth;
    const numberOfRows = Math.ceil(totalDays / 7);
    const nextMonthDaysLength = numberOfRows * 7 - totalDays;
    const nextMonthDays = Array.from(
      { length: nextMonthDaysLength },
      (_, index) => {
        return (
          <DaysCol key={`next-${index}`} className="not-current">
            {index + 1}
          </DaysCol>
        );
      }
    );

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const days = renderDays();
  const numberOfRows = Math.ceil(days.length / 7);

  return (
    <CalendarContainer>
      <HeaderContainer>
        <ArrowBackIcon onClick={() => changeMonth(-1)} />
        <DateContainer>
          <HeaderYear>{currentDate.getFullYear()}</HeaderYear>
          <HeaderDate>
            <p>{currentDate.toLocaleString('default', { month: 'long' })}</p>
          </HeaderDate>
        </DateContainer>
        <ArrowForwardIcon onClick={() => changeMonth(1)} />
      </HeaderContainer>
      <WeekWrap>{renderDaysOfWeek()}</WeekWrap>
      <DaysWrap rows={numberOfRows}>{days}</DaysWrap>
    </CalendarContainer>
  );
};

export default Calender;
