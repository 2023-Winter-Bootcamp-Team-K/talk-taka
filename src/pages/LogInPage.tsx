import LoginInput from '../components/common/LoginInput';
import Button from '../components/common/Btn';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/signup');
  };

  return (
    <BackGround>
      <LoginLayout>
        <Login>로그인</Login>
        <LoginInput
          marginBottom="2.74rem"
          type="아이디"
          placeholder="영문 + 숫자"
        ></LoginInput>
        <LoginInput
          marginBottom="4.12rem"
          type="비밀번호"
          placeholder="6자리 이상"
        ></LoginInput>
        <Button title="로그인"></Button>
        <SignUp onClick={goToMain}>회원가입 하러가기</SignUp>
      </LoginLayout>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Login_bg.png');
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const LoginLayout = styled.div`
  background-color: white;
  width: 34.75rem;
  height: 41.125rem;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = styled.div`
  width: 8.4375rem;
  height: 3.1875rem;
  color: #000;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.94rem;
  margin-bottom: 4.43rem;
`;

const SignUp = styled.button`
  all: unset;
  margin-top: 1.06rem;
  display: flex;
  width: 13.9375rem;
  height: 1.875rem;
  flex-direction: column;
  justify-content: center;
  color: #b2b2b2;

  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration-line: underline;
  &:active {
    opacity: 0.3;
  }
`;
