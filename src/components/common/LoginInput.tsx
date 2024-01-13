import { styled } from 'styled-components';
import { useInput } from '../../hooks/useInput';

interface AllProps {
  type?: string;
  typeI?: string;
  placeholder?: string;
  marginbottom?: string;
  marginbottomp?: string;
  marginbottomptt?: string;
  width?: string;
  widthp?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginInput({
  type = '종류',
  typeI = 'text',
  placeholder = 'placeholder',
  marginbottom = '0px',
  marginbottomp = '0px',
  marginbottomptt = '0.92rem',
  width = '29.55rem',
  widthp = '29.55rem',
  value,
  onChange,
}: AllProps) {
  return (
    <Layout
      width={width}
      widthp={widthp}
      marginbottom={marginbottom}
      marginbottomp={marginbottomp}
    >
      <InputType marginbottomptt={marginbottomptt}>{type}</InputType>
      <InputLayout width={width} widthp={widthp}>
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={typeI}
          autoComplete="true"
        ></input>
      </InputLayout>
    </Layout>
  );
}

const Layout = styled.div<{
  marginbottom: string;
  width: string;
  marginbottomp?: string;
  widthp: string;
}>`
  @media all and (min-width: 391px) {
    width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
    margin-bottom: ${(props) =>
      props.marginbottom === 'normal' ? '50px' : props.marginbottom};
  }
  @media (max-width: 390px) {
    width: ${(props) =>
      props.widthp === 'normal' ? '17.75rem' : props.widthp};
    margin-bottom: ${(props) => props.marginbottomp};
  }
`;

const InputType = styled.div<{ marginbottomptt: string }>`
  color: #414141;
  text-align: left;
  font-weight: bold;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media all and (min-width: 391px) {
    width: 8rem;
    height: 1.425rem;
    font-size: 1.25rem;
    margin-bottom: 0.76rem;
  }
  @media (min-width: 390px) and (max-width: 390px) {
    width: 9rem;
    height: 1.58481rem;
    font-size: 1rem;
    margin-bottom: ${(props) => props.marginbottomptt};
  }
`;

const InputLayout = styled.div<{
  width: string;
  widthp: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  align-items: center;

  @media all and (min-width: 391px) {
    width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
    height: 3.8rem;
    border-radius: 0.875rem;
  }
  @media (max-width: 390px) {
    width: ${(props) =>
      props.widthp === 'normal' ? '16.37706rem' : props.widthp};
    height: 2.35031rem;
    border-radius: 0.44rem;
  }

  input {
    all: unset;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    color: #585858;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;

    @media all and (min-width: 391px) {
      width: 100%;
      height: 1.84725rem;
      font-size: 1.25rem;
      margin-left: 0.94rem;
    }
    @media (max-width: 390px) {
      width: 100%;
      height: 1.1425rem;
      font-size: 1rem;
      margin-left: 0.51rem;
    }
  }
`;
