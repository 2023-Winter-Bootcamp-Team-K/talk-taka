import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LogoutIconSvg } from '../assets/SVG';
import Calender from '../components/calender/Calender';
import { baseInstance } from '../api/config';
import { getCookie } from '../utils/cookie';

export default function MainPage() {
  const navigate = useNavigate();

  const createChatRoom = async () => {
    const token = getCookie('token');
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    try {
      const response = await baseInstance.post(
        '/apps/create_chat_room/',
        {},
        config
      );
      if (response.status === 201) {
        console.log(response);
        window.localStorage.setItem('chat_id', response.data.chat_room_id);
        navigate(`/chat`);
      }
    } catch(error) {
      console.error(error);
    }
  };

  const logout = async () => {
    const refresh = getCookie('refresh_token');

    try {
      const response = await baseInstance.post('/auth/logout/', {
        refresh: refresh
      });
      if (response.status === 205) {
        console.log(response);
        window.localStorage.clear();
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BackGround>
      <LogoutBtn onClick={logout}>
        <LogoutIconSvg />
        로그아웃
      </LogoutBtn>
      <MainLayout>
        <Calender />
        <StyledButton onClick={createChatRoom}>대화하러 가기</StyledButton>
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

  @media (max-width: 391px) {
    background-image: url('src/assets/img/mainP.png');
    background-position: center;
    background-position-x: 50%;
    background-position-y: 30%;
  }
`;

const MainLayout = styled.div`
  padding-top: 2rem;
  width: 36rem;
  height: 48rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);

  margin-top: 11rem;
  margin-bottom: 6rem;
  margin-left: 20%;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 391px) {
    margin-left: auto; // 좌측 여백 자동 조정
    margin-right: auto; // 우측 여백 자동 조정
    align-items: center; // 수평 중앙 정렬
    width: 21rem;
    height: 34rem;
    margin-bottom: 17rem;
  }
`;

const StyledButton = styled.button`
  /* text */
  width: 16rem;
  height: 2.25rem;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;

  /* button */
  width: 23rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
  margin-top: 7rem;

  @media (max-width: 391px) {
    font-size: 1rem;
    width: 15.25rem;
    height: 3rem;
    margin-top: 0rem;
  }
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
  /* width: 28rem; */
  width: 35rem;
  line-height: 170%;
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
  @media (max-width: 1400px) {
    display: none;
  }
`;

const TodayDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return <>{formattedDate}</>;
};
