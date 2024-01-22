import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
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

export default function Modal() {
  return (
    <Overlay>
      <ModalContainer>
        {/* 모달 내용*/}
      </ModalContainer>
    </Overlay>
  );
}
