import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultResultPic from '../../assets/img/DefaultResultImage.png';

interface ImageModalProps {
  picture: string;
}

export default function ImageModal({ picture }: ImageModalProps) {
  const [quokkaImage, setquokkaImage] = useState(false);

  useEffect(() => {
    if (picture === DefaultResultPic) {
      setquokkaImage(true);
    }
  }, [picture]);

  return (
    <Overlay>
      <ModalContainer>
        {quokkaImage ? (
          <>
            <CapturedQuokkaImage src={picture} />
            <ImageText>이 날 찍은 사진이 없어요</ImageText> {/* 텍스트 추가 */}
          </>
        ) : (
          <CapturedImage src={picture} />
        )}
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 21.4375rem;
  height: 17.4375rem;
  border-radius: 1.75rem;
  background: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CapturedImage = styled.img`
  width: 18.5625rem;
  height: 15.8125rem;
  border-radius: 1.25rem;
`;

const CapturedQuokkaImage = styled.img`
  width: 13rem;
  height: auto;
  border-radius: 1.25rem;
`;

const ImageText = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  color: #000;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
`;
