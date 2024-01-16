import React, { useEffect, useState } from 'react';
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

const moodToImageUrl = {
  joy: 'https://ifh.cc/g/13Ktbk.png',
  sad: 'https://ifh.cc/g/pscoAZ.png',
  angry: 'https://ifh.cc/g/alvMNR.png',
};

type calenderType = {
  data: any;
  created_at: string;
  diaryId: number;
  imageURL?: string;
  mood?: string;
};

const Calender = ({ data }: calenderType) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sampleFeelings, setSampleFeelings] = useState({});

  console.log(data);

  type FeelingsType = {
    [key: string]: FeelingsEntry[];
  };
  type FeelingsEntry = {
    diaryId: number;
    mood: string;
    imageUrl?: string; // imageUrl 프로퍼티 추가 (선택적)
  };
  useEffect(() => {
    const exdata = [
      { created_at: '2024-01-15', diaryId: '1', mood: 'joy' },
      { created_at: '2024-01-16', diaryId: '2', mood: 'angry' },
    ];
    const feelings = data?.reduce((acc: FeelingsType, item) => {
      // 해당 날짜에 이미 데이터가 있는 경우, 배열에 객체를 추가합니다.
      if (!acc[item.created_at]) {
        acc[item.created_at] = [];
      }
      const imageUrl = moodToImageUrl[item.mood];
      acc[item.created_at].push({
        diaryId: item.diaryId,
        mood: moodToImageUrl[item.mood],
      });
      console.log(acc);

      return acc;
    }, {});
    console.log(feelings, '되냐');

    setSampleFeelings(feelings);
  }, [data]);

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
              src={sampleFeelings[dateKey][0].mood}
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
