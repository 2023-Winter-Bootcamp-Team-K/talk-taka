import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/RectangleBtn';
import { LogoutIconSvg } from '../assets/SVG';

export default function MainPage() {
  const navigate = useNavigate();
  const goToIntro = () => {
    navigate('/');
  };

  return (
    <BackGround>
      <LogoutBtn onClick={goToIntro}>
        <LogoutIconSvg />
        로그아웃
      </LogoutBtn>
      <MainLayout>
        {/* 달력 컴포넌트 추가 필요 */}
        <Button title="대화하러 가기 >"></Button>
      </MainLayout>
      <GreetingLayout>
        다시 돌아오지 않는 <TodayDate /> <br />
        길동이의 하루를 기록으로 남겨보세요
      </GreetingLayout>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Main_bg.png');
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
`;

const MainLayout = styled.div`
  width: 34.75rem;
  height: 46.5625rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);

  /* Layout 위치 */
  margin-top: 11.44rem;
  margin-bottom: 6rem;
  margin-left: 20%;

  /* button 위치 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3.88rem;
`;

const LogoutBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 1rem;
  right: 1rem;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
`;

const GreetingLayout = styled.div`
  display: flex;
  width: 28rem;
  height: 1.4375rem;
  flex-direction: column;
  justify-content: center;
  color: #ad6f1c;
  text-align: center;
  text-shadow: 2.5px 5px 4.3px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 16.87rem;
  margin-bottom: 45.69rem;
  margin-left: 12.06rem;
`;

const TodayDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return <>{formattedDate}</>;
};
