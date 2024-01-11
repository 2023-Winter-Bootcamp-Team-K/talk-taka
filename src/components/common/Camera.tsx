import styled from 'styled-components';
import Webcam from 'react-webcam';

export default function CameraBox() {
  return (
    <CameraLayout>
      <CameraBoxLayout>
        <Webcam style={{ borderRadius: '1.75rem' }} mirrored={true} />
      </CameraBoxLayout>
      <TextBox>말을 다하면 나를 눌러줘</TextBox>
      <MicButtonLayout>
        <Mic />
      </MicButtonLayout>
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
    margin-bottom: 2.25rem;
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
  width: 2.75994rem;
  height: 2.75994rem;
  @media all and (min-width: 391px) {
    margin-bottom: 1.19rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 1.5rem;
    margin-top: 0.68rem;
  }
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;

const Mic = styled.div`
  background-repeat: no-repeat;
  background-image: url('src/assets/img/Mic.png');
  @media all and (min-width: 391px) {
    width: 3.75rem;
    height: 3.75rem;
    background-size: 100%;
  }
  @media all and (max-width: 390px) {
    width: 30px;
    height: 30px;
    background-size: 100%;
  }
`;
