import { styled } from 'styled-components';
import { useState } from 'react';
import { CameraIconSvg } from '../../assets/SVG';
import ImageModal from '../modal/ImageModal';

interface ChatHistoryInfoProps {
  date: string;
  picture: string;  
}

export default function ChatHistoryInfo({ date, picture }: ChatHistoryInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <InfoWrapper>
      <DateText>{date}</DateText>
      <CamShowBtn onClick={() => setIsModalOpen(!isModalOpen)}>
        <CameraIconSvg />
      </CamShowBtn>
      {isModalOpen && <ImageModal picture={picture}/>}
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  @media all and (min-width: 391px) {
    justify-content: right;
    margin-right: 20rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 390px) {
    justify-content: center;
    transform: translateY(-2rem);
    /* margin-right: 3.25rem; */
  }
`;

const DateText = styled.div`
  display: flex;
  width: auto;
  height: 2rem;
  white-space: nowrap;
  align-items: center;

  /* text */
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    font-size: 1.125rem;
  }
`;

const CamShowBtn = styled.div`
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    display: none;
  }
  @media all and (max-width: 390px) {
    width: 1.75rem;
    height: 1.75rem;
  }
`;
