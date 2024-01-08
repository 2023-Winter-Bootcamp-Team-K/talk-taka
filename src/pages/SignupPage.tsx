import { styled } from 'styled-components';
import LoginInput from '../components/common/LoginInput';

export default function SignupPage() {
  return (
    <BackGround>
      <LoginLayout>
        <Login>회원가입</Login>
        <IdSignup type="아이디" placeholder="영문 + 숫자"></IdSignup>
      </LoginLayout>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Login_bg.png');
  /* margin: auto;
  width: 1440px;
  height: 1024px; */
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
  display: flex;
  width: 11.6875rem;
  height: 3.1875rem;
  flex-direction: column;
  justify-content: center;
  color: #000;

  text-align: center;
  font-family: Noto Sans;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.94rem;
  margin-bottom: 3.44rem;
`;

const IdSignup = styled(LoginInput)`
  width: 19.0625rem;
`;
