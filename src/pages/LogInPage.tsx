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
          marginBottomP="2.71rem"
          type="아이디"
          placeholder="영문 + 숫자"
        ></LoginInput>
        <LoginInput
          marginBottom="4.12rem"
          marginBottomP="2.84rem"
          type="비밀번호"
          typeI="password"
          placeholder="6자리 이상"
        ></LoginInput>
        <Button title="로그인"></Button>
        <SignUp onClick={goToMain}>회원가입 하러가기</SignUp>
      </LoginLayout>
      <Character />
    </BackGround>
  );
}

const BackGround = styled.div`
  z-index: 1;
  margin: auto;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media all and (min-width: 391px) {
    background-image: url('src/assets/img/Login_bg.png');
    background-position-x: 50%;
    background-position-y: 75%;
  }
  @media all and (max-width: 390px) {
    background-position: center;
    background-image: url('src/assets/img/LoginPage_p_bg.png');
  }
`;

const LoginLayout = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 391px) {
    width: 34.75rem;
    height: 41.125rem;
  }
  @media (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
  }
`;

const Login = styled.div`
  z-index: 3;
  color: #000;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media all and (min-width: 391px) {
    margin-top: 2.94rem;
    margin-bottom: 4.43rem;
    width: 8.4375rem;
    height: 3.1875rem;
    font-size: 2.75rem;
  }
  @media (max-width: 390px) {
    margin-top: 3.37rem;
    margin-bottom: 2.56rem;
    width: 8.92025rem;
    height: 2.3125rem;
    font-size: 1.5rem;
  }
`;

const SignUp = styled.button`
  z-index: 3;
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #b2b2b2;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration-line: underline;

  @media all and (min-width: 391px) {
    margin-top: 1.06rem;
    width: 13.9375rem;
    height: 1.875rem;
    font-size: 1.125rem;
  }
  @media (max-width: 390px) {
    width: 9.77631rem;
    height: 1.48625rem;
    font-size: 0.875rem;
    margin-top: 0.47rem;
  }
  &:active {
    opacity: 0.3;
  }
`;

const Character = styled.div`
  @media all and (min-width: 391px) {
  }
  @media all and (max-width: 390px) {
    all: unset;
    position: relative;
    width: 9.9375rem;
    height: 13.875rem;

    z-index: 4;
    top: 31%;
    left: 25%;
    background-image: url('src/assets/img/쿼카.png');
    background-repeat: no-repeat;
  }
`;
