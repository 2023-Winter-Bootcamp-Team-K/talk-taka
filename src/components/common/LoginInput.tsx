import { styled } from 'styled-components';

interface AllProps {
  type?: string;
  typeI?: string;
  placeholder?: string;
  marginBottom?: string;
  marginBottomP?: string;
  marginBottomPTT?: string;
  width?: string;
  widthP?: string;
}

export default function LoginInput({
  type = '종류',
  typeI = 'text',
  placeholder = 'placeholder',
  marginBottom = '0px',
  marginBottomP = '0px',
  marginBottomPTT = '0.92rem',
  width = 'normal',
  widthP = 'normal',
}: AllProps) {
  return (
    <Layout
      width={width}
      widthP={widthP}
      marginBottom={marginBottom}
      marginBottomP={marginBottomP}
    >
      <InputType marginBottomPTT={marginBottomPTT}>{type}</InputType>
      <InputLayout width={width} widthP={widthP}>
        <input placeholder={placeholder} type={typeI}></input>
      </InputLayout>
    </Layout>
  );
}

const Layout = styled.div<{
  marginBottom: string;
  width: string;
  marginBottomP: string;
  widthP: string;
}>`
  @media all and (min-width: 391px) {
    width: ${(props) => (props.width === 'normal' ? '29.55rem' : props.width)};
    margin-bottom: ${(props) =>
      props.marginBottom === 'normal' ? '50px' : props.marginBottom};
  }
  @media (max-width: 390px) {
    width: ${(props) =>
      props.widthP === 'normal' ? '17.75rem' : props.widthP};
    margin-bottom: ${(props) =>
      props.marginBottomP === 'normal' ? '2.71' : props.marginBottomP};
  }
`;

const InputType = styled.div<{ marginBottomPTT: string }>`
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
    margin-bottom: ${(props) =>
      props.marginBottomPTT === 'normal' ? '0.92rem' : props.marginBottomPTT};
  }
`;

const InputLayout = styled.div<{
  width: string;
  widthP: string;
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
      props.widthP === 'normal' ? '16.37706rem' : props.widthP};
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
