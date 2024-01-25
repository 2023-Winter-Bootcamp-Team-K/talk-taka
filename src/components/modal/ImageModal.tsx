import styled from 'styled-components';

interface ImageModalProps {
  picture: string;
}

export default function ImageModal({picture}:ImageModalProps) {
return (
    <Overlay>
      <ModalContainer >
        <CapturedImage src={picture} />
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
  background: #FFF;
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
