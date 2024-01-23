import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/Animation - 1704999772308.json';
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
  margin-bottom: 1.5rem;

  @media all and (max-width: 390px) {
    width: 2.84131rem;
    height: 2.47119rem;
    margin-bottom: 1.47rem;
  }
`;
