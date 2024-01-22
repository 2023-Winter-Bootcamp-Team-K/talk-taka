import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpeakingQuakka from './assets/img/SpeakingQuakka.png';
import MainBG from './assets/img/MainBG.png';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${MainBG});
  background-size: cover;
`;

const BouncingImage = styled.img`
  animation: ${bounce} 1s ease-in-out infinite;
`;

const TextBox = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px; 

  @media all and (min-width: 391px) {
    font-size: 3rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 0.68rem;
    font-size: 1rem;
  }
`;

const LoadingFallback = () => (
  <Background>
    <BouncingImage src={SpeakingQuakka} alt="Loading" />
    <TextBox>잠깐만 기다료봐</TextBox> 
  </Background>
);

export default LoadingFallback;
