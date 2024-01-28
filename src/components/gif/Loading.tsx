import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/Load.json';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Wrapper>
      <Lottie animationData={loadingLottie} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 11rem;
  height: 11rem;
  
  @media all and (max-width: 390px) {
    width: 7rem; 
    height: 7rem; 
}
`;
