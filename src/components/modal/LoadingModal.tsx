import styled from 'styled-components';
import Loading from '../gif/Loading';
export default function LoadingModal() {
  return (
    <>
      <Overlay>
        <Container>
          <p>일기를 만들고 있어요</p>
          <img src="src/assets/img/LoadingQuaka.png" alt="" />
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
          <br /><br />
          <p>잠시만 기다려줘</p>
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
  background: rgba(20, 22, 23, 0.6);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  position: relative;
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

const LoadingContainer = styled.div`
  position: absolute;
  bottom: 96px;
`;
