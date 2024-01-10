import styled from 'styled-components';
import Webcam from 'react-webcam';
import { Mic } from '../../assets/SVG';

export default function CameraBox() {
  return (
    <CameraLayout>
      <CameraBoxLayout>
        <Webcam style={{ borderRadius: '1.75rem' }} />
      </CameraBoxLayout>
      <TextBox>말을 다하면 나를 눌러줘</TextBox>
      <MicButtonLayout>
        <Mic />
      </MicButtonLayout>
    </CameraLayout>
  );
}

const CameraLayout = styled.div`
  width: 35.0625rem;
  max-height: 43.75rem;
  min-height: 43.75rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CameraBoxLayout = styled.div`
  width: 30rem;
  height: 22.5rem;
  margin-top: 5rem;
  flex-grow: 1;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MicButtonLayout = styled.button`
  all: unset;
  margin-bottom: 1.19rem;
  margin-top: 1.66rem;
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;
