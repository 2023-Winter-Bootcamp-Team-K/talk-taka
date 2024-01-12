import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

export default function CameraModal() {
  const navigate = useNavigate();

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);

  const webcamRef = useRef<Webcam>(null);

  const [url, setUrl] = useState<string | undefined>(undefined);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCaptureEnable(true);
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const recapture = () => {
    setCaptureEnable(false);
  };

  const confirm = () => {
    navigate('/diary');
  };

  return (
    <>
      <Overlay>
        <Container>
          <Text>
            오늘의 나를
            <br /> 기록으로 남겨보자!
          </Text>
          <CameraLayout>
            {isCaptureEnable ? (
              <img
                src={url}
                width={'100%'}
                height={'100%'}
                style={{ borderRadius: '1.75rem' }}
              />
            ) : (
              <Webcam
                ref={webcamRef}
                width={'100%'}
                height={'100%'}
                screenshotFormat="image/jpeg"
                style={{ borderRadius: '1.75rem' }}
              />
            )}
          </CameraLayout>
          {isCaptureEnable ? (
            <Row>
              <ReCapture onClick={recapture}>다시 찍기</ReCapture>
              <Confirm onClick={confirm}>확인</Confirm>
            </Row>
          ) : (
            <Capture onClick={capture}>찰칵!</Capture>
          )}
        </Container>
      </Overlay>
    </>
  );
}

const Overlay = styled.div`
  z-index: 19;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 22, 23, 0.4);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.4375rem;
  background: #fff;

  @media all and (min-width: 391px) {
    width: 33.36488rem;
    height: 37.5rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 25.6875rem;
  }
`;

const Text = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media all and (min-width: 391px) {
    width: 17.68338rem;
    height: 4.2rem;
    margin-top: 3.5rem;
    margin-bottom: 1rem;

    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    width: 11.36188rem;
    height: 2.877rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    font-size: 1.125rem;
  }
`;

const CameraLayout = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1.3125rem;

  @media all and (min-width: 391px) {
    width: 26.1875rem;
    height: 19.625rem;
  }
  @media all and (max-width: 390px) {
    width: 18.5625rem;
    height: 13.875rem;
  }
`;

const Row = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;

  @media all and (min-width: 391px) {
    margin-top: 2.12rem;
    border-radius: 0.9375rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 1.37rem;
    border-radius: 0.9375rem;
  }
`;

const Capture = styled.button`
  all: unset;
  border-radius: 0.6rem;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;

    margin-top: 2.12rem;

    //text
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;

    background: #ff888c;

    margin-top: 1rem;
  }
`;

const ReCapture = styled.button`
  all: unset;
  border-radius: 0.6rem;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;

  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;
    margin-right: 1.64rem;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;
    background: #ff888c;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;
const Confirm = styled.button`
  all: unset;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;

  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.6rem;

  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;
    background: #ff888c;
    font-size: 1rem;
  }
`;
