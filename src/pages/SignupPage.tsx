import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/common/LoginInput';
import Button from '../components/common/Btn';
import { useState } from 'react';
import { MaleSvg, FemaleSvg } from '../assets/SVG';

export default function SignupPage() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/login');
  };
  const [selectedGender, setSelectedGender] = useState<null | string>(null);

  const toggleGender = (gender: string) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  return (
    <BackGround>
      <LoginLayout>
        {page === 1 ? (
          <>
            <Login>회원가입</Login>
            <DirectionRow>
              <LoginInput
                width="19.0625rem"
                type="아이디"
                placeholder="영문 + 숫자"
                marginBottom="0.47rem"
              ></LoginInput>
              <Button
                title="중복확인"
                width="9.1875rem"
                marginL="1.31rem"
                marginT="1.4rem"
                fontS="1.125rem"
                borderR="0.875rem"
              ></Button>
            </DirectionRow>
            <Left>
              <IdCheck>
                <CheckMark>✔사용 가능한 아이디 입니다.</CheckMark>
              </IdCheck>
            </Left>
            <LoginInput
              type="비밀번호"
              typeI="password"
              placeholder="6자리 이상"
              marginBottom="1.31rem"
            ></LoginInput>
            <LoginInput
              type="비밀번호 확인"
              typeI="password"
              placeholder="6자리 이상"
              marginBottom="0.47rem"
            ></LoginInput>
            <Left>
              <IdCheck>
                <CheckMark>✔일치합니다.</CheckMark>
              </IdCheck>
            </Left>
            <Button
              onClick={() => {
                setPage(2);
              }}
              title="다음"
              width="14.24731rem"
            ></Button>
            <SignUp onClick={goToMain}>로그인 하러가기</SignUp>
          </>
        ) : (
          <>
            <Login>회원가입</Login>
            <LoginInput
              type="이름"
              placeholder="자녀분의 이름을 입력해주세요."
              marginBottom="2.25rem"
            ></LoginInput>
            <LoginInput
              type="생년월일"
              placeholder="자녀분의 나이를 입력해주세요 EX.) 2000-01-01"
              marginBottom="2.25rem"
            ></LoginInput>
            <GenderLayout>
              <Gender>성별</Gender>
            </GenderLayout>
            <GenderButtonLayout>
              <GenderButton
                onClick={() => toggleGender('male')}
                isSelected={selectedGender === 'male'}
              >
                <MaleSvg />
              </GenderButton>
              <GenderButton
                onClick={() => toggleGender('female')}
                isSelected={selectedGender === 'female'}
              >
                <FemaleSvg />
              </GenderButton>
            </GenderButtonLayout>
            <Button title="확인" width="14.24731rem" marginT="1.06rem"></Button>
            <SignUp onClick={goToMain}>로그인 하러가기</SignUp>
          </>
        )}
      </LoginLayout>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Login_bg.png');
  margin: auto;
  width: 1440px;
  height: 1024px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const LoginLayout = styled.div`
  background-color: white;
  width: 34.75rem;
  height: 45.125rem;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Login = styled.div`
  display: flex;
  width: 11.6875rem;
  margin-bottom: 3.44rem;
  flex-direction: column;
  justify-content: center;
  color: #000;

  text-align: center;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.94rem;
  margin-bottom: 3.44rem;
`;

const Left = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  padding-left: 2.87rem;
`;

const IdCheck = styled.div`
  width: 17.95856rem;
  margin-bottom: 0.76;
  display: flex;
`;

const CheckMark = styled.div`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-bottom: 0.86rem;

  /* text */
  display: flex;
  width: 16.89606rem;
  height: 1.84725rem;
  flex-direction: row;
  justify-content: left;
  color: #78aa77;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SignUp = styled.button`
  all: unset;
  margin-top: 1.06rem;
  margin-bottom: 2.5rem;
  display: flex;
  width: 13.9375rem;
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

const GenderButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% / 1.5);
  justify-content: space-around;
`;

const GenderButton = styled.button<{ isSelected: boolean }>`
  all: unset;
  width: 5.75rem;
  height: 7.4375rem;

  border-radius: 3.6875rem;
  background: #fffbfb;

  ${({ isSelected }) =>
    isSelected &&
    `
        box-shadow: 0px 0px 15px 9px rgba(0, 0, 0, 0.07);
    `}

  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 15px 9px rgba(0, 0, 0, 0.07);
  }
  &:active {
    opacity: 0.3;
  }
`;

const Gender = styled.div`
  display: flex;
  width: 7.6875rem;
  height: 2rem;
  flex-direction: row;
  margin-left: 2.69rem;

  //text
  color: #2c2c2c;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GenderLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
