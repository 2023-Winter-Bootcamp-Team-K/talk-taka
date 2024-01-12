import Lottie from 'lottie-react';
import loadingLottie from '/src/assets/lottie/Mic.json';
import styled from 'styled-components';

export default function MicGIF() {
  return (
    <Wrapper>
      <Lottie animationData={loadingLottie} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 5rem;
  height: 5rem;
`;
