import { styled } from 'styled-components';

type TextProps = {
  type: string;
  placeholder: string;
};

export default function LoginInput({ type, placeholder }: TextProps) {
  return (
    <Layout>
      <InputType>{type}</InputType>
      <InputLayout>
        <input placeholder={placeholder}></input>
      </InputLayout>
    </Layout>
  );
}

const Layout = styled.div`
  width: 29.55rem;
  height: 6.96669rem;
  margin-bottom: 50px;
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

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.55rem;
  height: 3.8rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  align-items: center;

  input {
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
    text-align: left;
  }
`;
