import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/common/LoginInput';
import Button from '../components/common/Btn';
import { useState } from 'react';
import { MaleSvg, FemaleSvg } from '../assets/SVG';

export default function SignupPage() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const goToLogin = () => {
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
                widthp="11.569rem"
                type="아이디"
                placeholder="영문 + 숫자"
                marginbottom="0.47rem"
                marginbottomptt="0.06rem"
              ></LoginInput>
              <Button
                title="중복확인"
                width="9.1875rem"
                widthp="5.8125rem"
                marginl="1.31rem"
                marginlp="0.76rem"
                margint="1.4rem"
                margintp="1.5rem"
                fonts="1.125rem"
                fontsp="0.875rem"
                borderr="0.875rem"
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
              marginbottom="1.31rem"
              marginbottomp="2.09rem"
              marginbottomptt="0.06rem"
            ></LoginInput>
            <LoginInput
              type="비밀번호 확인"
              typeI="password"
              placeholder="6자리 이상"
              marginbottom="0.47rem"
              marginbottomptt="0.06rem"
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
            <SignUp onClick={goToLogin}>로그인 하러가기</SignUp>
          </>
        ) : (
          <>
            <Login>회원가입</Login>
            <LoginInput
              type="이름"
              placeholder="자녀분의 이름을 입력해주세요."
              marginbottom="2.25rem"
              marginbottomp="2.2rem"
              marginbottomptt="0.06rem"
            ></LoginInput>
            <LoginInput
              type="생년월일"
              placeholder="EX.) 2017-01-01"
              marginbottom="2.25rem"
              marginbottomp="1.7rem"
              marginbottomptt="0.03rem"
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
            <Button
              title="확인"
              width="14.24731rem"
              margint="1.5rem"
              margintp="0.6rem"
              onClick={goToLogin}
            ></Button>
            <SignUp onClick={goToLogin}>로그인 하러가기</SignUp>
          </>
        )}
      </LoginLayout>
    </BackGround>
  );
}

const BackGround = styled.div`
  z-index: 1;
  margin: auto;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media all and (min-width: 791px) {
    background-image: url('src/assets/img/Login_bg.png');
    background-position-x: 50%;
    background-position-y: 75%;
  }
  @media all and (max-width: 790px) {
    background-position: center;
    background-image: url('src/assets/img/LoginPage_p_bg.png');
  }
`;

const LoginLayout = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 791px) {
    width: 34.75rem;
    height: 45.125rem;
  }
  @media all and (max-width: 790px) {
    width: 21.4375rem;
    height: 32.625rem;
  }
`;

const DirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.94rem;

  @media all and (min-width: 791px) {
    width: 11.6875rem;
    height: 3.1875rem;
    font-size: 2.75rem;
    margin-bottom: 3.44rem;
  }
  @media all and (max-width: 790px) {
    width: 4.41794rem;
    height: 1.4375rem;
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  @media all and (min-width: 791px) {
    padding-left: 2.87rem;
  }
  @media all and (max-width: 790px) {
    padding-left: 2rem;
  }
`;

const IdCheck = styled.div`
  display: flex;

  @media all and (min-width: 791px) {
    width: 17.95856rem;
    height: 1.84725rem;
    margin-bottom: 0.76;
  }
  @media all and (max-width: 790px) {
    width: 17.95856rem;
    height: 1.84725rem;
    margin-bottom: 1rem;
  }
`;

const CheckMark = styled.div`
  /* text */
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: #78aa77;

  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 791px) {
    width: 17.95856rem;
    height: 0.9375rem;
    font-size: 1.125rem;
  }
  @media all and (max-width: 790px) {
    width: 17.95856rem;
    height: 1.84725rem;
    font-size: 0.875rem;
  }
`;

const SignUp = styled.button`
  all: unset;

  display: flex;
  width: 13.9375rem;
  flex-direction: column;
  justify-content: center;
  color: #b2b2b2;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 791px) {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
  }
  @media all and (max-width: 790px) {
    margin-top: 0.7rem;
    font-size: 0.875rem;
  }

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

  border-radius: 3.6875rem;
  background: #fffbfb;

  @media all and (min-width: 791px) {
    width: 5.75rem;
    height: 7.4375rem;
  }
  @media all and (max-width: 790px) {
    width: 4.625rem;
    height: 5.5rem;
  }

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
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media all and (min-width: 791px) {
    font-size: 1.25rem;
  }
  @media all and (max-width: 790px) {
    font-size: 1rem;
  }
`;

const GenderLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
