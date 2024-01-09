import { styled } from 'styled-components';

interface AllProps {
  type?: string;
  typeI?: string;
  placeholder?: string;
  marginBottom?: string;
  width?: string;
}

export default function LoginInput({
  type = '종류',
  typeI = 'text',
  placeholder = 'placeholder',
  marginBottom = '0px',
  width = '29.55rem',
}: AllProps) {
  return (
    <Layout width={width} marginBottom={marginBottom}>
      <InputType>{type}</InputType>
      <InputLayout width={width}>
        <input placeholder={placeholder} type={typeI}></input>
      </InputLayout>
    </Layout>
  );
}

const Layout = styled.div<{ marginBottom: string; width: string }>`
  width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
  margin-bottom: ${(props) =>
    props.marginBottom === 'normal' ? '50px' : props.marginBottom};
`;

const InputType = styled.div`
  width: 8rem;
  height: 1.425rem;
  color: #414141;
  text-align: left;
  font-weight: bold;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.76rem;
`;

const InputLayout = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
  height: 3.8rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  align-items: center;

  input {
    all: unset;
    display: flex;
    width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
    height: 1.84725rem;
    flex-direction: column;
    justify-content: center;
    background-color: #f0f0f0;
    color: #585858;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    margin-left: 0.94rem;
  }
`;
