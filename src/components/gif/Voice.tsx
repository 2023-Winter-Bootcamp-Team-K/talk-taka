import Lottie from 'lottie-react';
import loadingLottie from '/src/assets/lottie/Animation - 1704999772308.json';
import styled from 'styled-components';

export default function Voice() {
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
