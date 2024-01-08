import { styled } from 'styled-components';

export default function LoginInput() {
  return (
    <LayOut>
      <InputType>아이디</InputType>
      <InputLayer>
        <IdPwInput placeholder="영문 + 숫자"></IdPwInput>
      </InputLayer>
    </LayOut>
  );
}

const LayOut = styled.div`
  width: 29.55rem;
  height: 6.96669rem;
`;

const InputType = styled.div`
  width: 5.32956rem;
  height: 1.425rem;
  color: #2c2c2c;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.74rem;
`;

const InputLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.55rem;
  height: 3.8rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  align-items: center;
`;

const IdPwInput = styled.input`
  all: unset;
  display: flex;
  width: 27.26438rem;
  height: 1.84725rem;
  flex-direction: column;
  justify-content: center;
  background-color: #f0f0f0;
  color: #b2b2b2;
  font-family: Noto Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
