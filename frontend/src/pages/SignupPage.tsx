import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/common/LoginInput';
import Button from '../components/common/Btn';
import { useCallback, useState } from 'react';
import { MaleSvg, FemaleSvg } from '../assets/SVG';
import { baseInstance } from '../api/config';

// 아이디 중복 확인 API 요청 함수
const checkIdAvailability = async (id: string) => {
  const response = await baseInstance.get(`/check/id/availability/?id=${id}`);
  return response.data;
};

export default function SignupPage() {
  //회원가입 변수
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCk, setPwCk] = useState('');
  const [username, setUsername] = useState('');
  const [birth, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<null | string>(null);
  const gender = selectedGender;

  //회원가입 유효성 검사 변수
  const [isId, setIsId] = useState<boolean>(false);
  const [_, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [isAge, setIsAge] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false);

  //색상 변수
  const [ChangeColorId, setChangeColorId] = useState('#c42c21');
  const [ChangeColorPw, setChangeColorPw] = useState('#c42c21');
  const [ChangeColorPwCk, setChangeColorPwCk] = useState('#c42c21');

  // 오류메시지 상태저장
  const [idMessage, setIdMessage] = useState<string>(
    '✖ 영문+숫자 조합으로 입력해주세요!'
  );
  const [passwordMessage, setPasswordMessage] = useState<string>(
    '✖ 영문+숫자 조합으로 입력해주세요!'
  );
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('✖ 비밀번호가 일치하지 않음!');

  // 페이지 내 이동 변수
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // 버튼 활성화
  const isButtonDisabled = !isId || !isPasswordConfirm;
  const isgoToLoginDisabled = isAge && isName;

  const genderDisabled = () => {
    if (gender == null) {
      return true;
    } else {
      return false;
    }
  };

  const isConfirmDisabled = isButtonDisabled || genderDisabled();

  // 중복 확인 버튼 클릭 핸들러
  const onCheckId = async () => {
    try {
      const data = await checkIdAvailability(id);
      if (data.available) {
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('이미 사용 중인 아이디입니다.');
      }
    } catch (error) {
      console.error('API 요청 중 에러 발생', error);
      alert('중복 확인 중 오류가 발생했습니다.');
    }
  };

  //외부 페이지 이동
  const goToLogin = () => {
    navigate('/login');
  };

  const goToLoginConfirm = () => {
    if (isgoToLoginDisabled === true) {
      onSubmit();
    } else {
      alert('형식에 맞지 않음!');
    }
  };

  // 성별 선택 토글
  const toggleGender = (gender: string) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  //유효성 검사
  ///아이디
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const IdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{0,25}$/; // 조건 넣으면 됨
    const IdCurrent = e.target.value;
    setId(IdCurrent);

    if (!IdRegex.test(IdCurrent)) {
      setIdMessage('✖ 영문+숫자 조합으로 입력해주세요.');
      setChangeColorId('#c42c21');
      setIsId(false);
    } else {
      setIdMessage('✔ 사용가능한 아이디입니다.');
      setChangeColorId('#1b8845');
      setIsId(true);
    }
  }, []);
  ///비밀번호
  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const PwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/; // 조건 넣으면 됨
    const PwCurrent = e.target.value;
    setPw(PwCurrent);

    if (!PwRegex.test(PwCurrent)) {
      setPasswordMessage('✖ 영문+숫자 조합으로 입력해주세요.');
      setChangeColorPw('#c42c21');
      setIsPassword(false);
    } else {
      setPasswordMessage('✔ 사용가능한 비밀번호입니다.');
      setChangeColorPw('#1b8845');
      setIsPassword(true);
    }
  }, []);
  ///비밀번호 확인
  const onChangePwCk = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const PwCkCurrent = e.target.value;
      setPwCk(PwCkCurrent);

      if (pw !== PwCkCurrent) {
        setPasswordConfirmMessage('✖ 비밀번호가 일치하지 않습니다.');
        setChangeColorPwCk('#c42c21');
        setIsPasswordConfirm(false);
      } else {
        setPasswordConfirmMessage('✔ 비밀번호가 일치합니다.');
        setChangeColorPwCk('#1b8845');
        setIsPasswordConfirm(true);
      }
    },
    [pw]
  );
  ///탄생일
  const onChangeAge = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const ageRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/i;
    const ageCurrent = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');

    setAge(ageCurrent);

    if (!ageRegex.test(ageCurrent)) {
      setIsAge(false);
    } else {
      setIsAge(true);
    }
  }, []);
  /// 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nameRegex = /^[ㄱ-ㅎ|가-힣]+$/;
    const nameCurrent = e.target.value;
    setUsername(nameCurrent);

    if (!nameRegex.test(nameCurrent)) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  }, []);

  // 회원가입
  const onSubmit = async () => {
    const data = {
      username: username,
      id: id,
      password: pw,
      age: birth,
      gender: gender,
    };

    try {
      const response = await baseInstance.post('/members', data);
      if (response.data.status === '201') {
        navigate('/login');
      }
    } catch (error) {
      alert('형식이 맞지 않습니다. 다시 작성해주세요');
      console.error(error);
    }
  };

  const setNextPage = () => {
    if (!isButtonDisabled) {
      setPage(2);
    }
  };

  // 리턴 값
  return (
    <BackGround>
      <LoginLayout>
        {page === 1 ? (
          <>
            <Login>회원가입</Login>
            <DirectionRow>
              <LoginInput
                value={id}
                onChange={onChangeId}
                width="19.0625rem"
                widthp="11.569rem"
                type="아이디"
                placeholder="영문 + 숫자"
                marginbottom="0.47rem"
                marginbottomptt="0.06rem"
              />
              <Button
                title="중복확인"
                onClick={onCheckId}
                width="9.1875rem"
                widthp="5.8125rem"
                marginl="1.31rem"
                marginlp="0.76rem"
                margint="1.4rem"
                margintp="1.5rem"
                fonts="1.125rem"
                fontsp="0.875rem"
                borderr="0.875rem"
              />
            </DirectionRow>
            <Left>
              <IdCheck>
                <CheckMark color={ChangeColorId}>{idMessage}</CheckMark>
              </IdCheck>
            </Left>
            <LoginInput
              value={pw}
              onChange={onChangePw}
              type="비밀번호"
              typeI="password"
              placeholder="영문 + 숫자  6자리 이상"
              marginbottom="0.47rem"
              marginbottomp="0.09rem"
              marginbottomptt="0.06rem"
            />
            <Left>
              <IdCheck>
                <CheckMark color={ChangeColorPw}>{passwordMessage}</CheckMark>
              </IdCheck>
            </Left>
            <LoginInput
              value={pwCk}
              onChange={onChangePwCk}
              type="비밀번호 확인"
              typeI="password"
              placeholder="한번 더 입력해주세요"
              marginbottom="0.47rem"
              marginbottomptt="0.06rem"
            />
            <Left>
              <IdCheck>
                <CheckMark color={ChangeColorPwCk}>
                  {passwordConfirmMessage}
                </CheckMark>
              </IdCheck>
            </Left>
            <Button
              onClick={setNextPage}
              disabled={isButtonDisabled}
              title="다음"
              width="14.24731rem"
            />
            <SignUp onClick={goToLogin}>로그인 하러가기</SignUp>
          </>
        ) : (
          <>
            <Login>회원가입</Login>
            <LoginInput
              value={username}
              onChange={onChangeName}
              type="이름"
              placeholder="자녀분의 이름을 입력해주세요."
              marginbottom="2.25rem"
              marginbottomp="2.2rem"
              marginbottomptt="0.06rem"
            />
            <LoginInput
              value={birth}
              onChange={onChangeAge}
              type="생년월일"
              placeholder="EX.) 2017-01-01"
              marginbottom="2.25rem"
              marginbottomp="1.7rem"
              marginbottomptt="0.03rem"
            />
            <GenderLayout>
              <Gender>성별</Gender>
            </GenderLayout>
            <GenderButtonLayout>
              <GenderButton
                onClick={() => toggleGender('male')}
                isselected={selectedGender === 'male' ? 1 : 0}
              >
                <MaleSvg />
              </GenderButton>
              <GenderButton
                onClick={() => toggleGender('female')}
                isselected={selectedGender === 'female' ? 1 : 0}
              >
                <FemaleSvg />
              </GenderButton>
            </GenderButtonLayout>
            <Button
              title="확인"
              disabled={isConfirmDisabled}
              onClick={goToLoginConfirm}
              width="14.24731rem"
              margint="1.5rem"
              margintp="0.6rem"
            />
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
    margin-bottom: 0.5rem;
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

const CheckMark = styled.div<{ color: string }>`
  /* text */
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: ${(props) => props.color};

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

const GenderButton = styled.button<{ isselected: number }>`
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

  ${(props) =>
    props.isselected &&
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
