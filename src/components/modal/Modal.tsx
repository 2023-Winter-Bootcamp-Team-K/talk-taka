import { useState } from 'react';
import styled from 'styled-components';

type ModalProps = {
  modalConfirm?: () => void;
};

export default function Modal({ modalConfirm }: ModalProps) {
  const [selectedFeel, setSelectedFeel] = useState<null | string>(null);

  const toggleFeel = (feel: string) => {
    setSelectedFeel(selectedFeel === feel ? null : feel);
  };

  if (selectedFeel === null) {
  } else {
    window.localStorage.setItem('mood', selectedFeel);
  }

  return (
    <>
      <Overlay>
        <Container>
          <p>
            오늘 하루
            <br />
            어떤 기분이었는지 알려줘!
          </p>
          <FeelingLayout>
            <Feeling
              onClick={() => toggleFeel('angry')}
              $isselected={selectedFeel === 'angry' ? '1' : '0'}
            >
              <img src="https://ifh.cc/g/a8JKwo.png" alt="" />
              <p>분노</p>
            </Feeling>

            <Feeling
              onClick={() => toggleFeel('joy')}
              $isselected={selectedFeel === 'joy' ? '1' : '0'}
            >
              <img src="https://ifh.cc/g/13Ktbk.png" alt="" />
              <p>기쁨</p>
            </Feeling>

            <Feeling
              onClick={() => toggleFeel('sad')}
              $isselected={selectedFeel === 'sad' ? '1' : '0'}
            >
              <img src="https://ifh.cc/g/pscoAZ.png" alt="" />
              <p>슬픔</p>
            </Feeling>
          </FeelingLayout>
          <Confirm onClick={modalConfirm}>확인</Confirm>
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
  justify-content: center;
  align-items: center;

  border-radius: 1.4375rem;
  background: #fff;

  @media all and (min-width: 391px) {
    width: 30rem;
    height: 30rem;

    p {
      font-family: 'Cafe24Dongdong';
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 400;
    }
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 24.8125rem;

    p {
      font-family: 'Cafe24Dongdong';
      font-size: 1.125rem;
      text-align: center;
      margin-bottom: 2.8rem;
      font-weight: 600;
    }
  }
`;

const FeelingLayout = styled.div`
  display: flex;
`;

const Feeling = styled.div<{ $isselected: string }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${(props) =>
    props.$isselected === '1'
      ? `
        img {
          transform: scale(1.2);
        }
        p {
          font-weight: bold;
        }
      `
      : `
        img {
          transform: scale(1);
        }
        p {
          font-weight: normal;
        }
      `}

  img {
    @media all and (min-width: 391px) {
      width: 10rem;
      height: 9rem;
    }
    @media all and (max-width: 390px) {
      width: 7rem;
      height: 7rem;
    }

    transition: transform 0.3s ease-in-out;
    &:hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);
    }
  }

  p {
    transition: font-weight 0.3s ease-in-out;
  }
`;

const Confirm = styled.button`
  all: unset;
  border-radius: 0.9375rem;
  background: #ff888c;
  color: white;
  font-family: 'Cafe24Dongdong';
  text-align: center;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  @media all and (min-width: 391px) {
    width: 7.125rem;
    height: 3.125rem;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 6.5rem;
    height: 2.27006rem;
    font-size: 1.125rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.25);
  }
  &:active {
    opacity: 0.3;
  }
`;
