import styled from 'styled-components';
import Webcam from 'react-webcam';

type CameraBoxProps = {
  isShowChar: () => void;
};

export default function CameraBox({ isShowChar: isShowChar }: CameraBoxProps) {
  return (
    <CameraLayout>
      <CameraBoxLayout>
        <Webcam style={{ borderRadius: '1.75rem' }} mirrored={true} />
      </CameraBoxLayout>
    </CameraLayout>
  );
}

const CameraLayout = styled.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    height: 43.75rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
    box-shadow: none;
  }
`;

const CameraBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.82);

  @media all and (min-width: 391px) {
    margin-top: 5rem;
    margin-bottom: 3.19rem;
    width: 26.1875rem;
    height: 25.6875rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 5.31rem;
    margin-bottom: 2.87rem;
    width: 18.5625rem;
    height: 18.1875rem;
  }
`;

const TextBox = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 0.68rem;
    font-size: 1rem;
  }
`;

const MicButtonLayout = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  width: 12rem;
  height: 4rem;

  @media all and (max-width: 390px) {
    margin-bottom: 1.5rem;
    margin-top: 0.68rem;
  }
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;

const Mic = styled.img`
  all: unset;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;

  @media all and (max-width: 390px) {
    width: 30px;
    height: 30px;
    background-size: 100%;
  }
`;
