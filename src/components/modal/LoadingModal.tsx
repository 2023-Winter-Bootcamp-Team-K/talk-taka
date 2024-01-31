import styled from 'styled-components';
import Loading from '../gif/Loading';
import LoadingQuakka from '../../assets/img/LoadingQuaka.png';

export default function LoadingModal() {
  return (
    <>
      <Overlay>
        <Container>
          <Text className="message-top">일기를 만들고 있어요</Text>
          <StyledImage src={LoadingQuakka} />
          <br />
          <br />
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
          <Text className="message-bottom">잠시만 기다려줘</Text>
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
    padding-top: 1rem;
  }

  @media all and (max-width: 390px) {
    width: 18rem;
    height: 20rem;
    padding-top: 2rem;
  }
`;

const Text = styled.p`
  font-family: 'Cafe24Dongdong';
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;

  &.message-top {
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;

    @media all and (max-width: 390px) {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      font-weight: 400;
    }
  }
  &.message-bottom {
    font-size: 1.5rem;
    margin-bottom: 3.2rem;

    @media all and (max-width: 390px) {
      font-size: 1.2rem;
      margin-bottom: 3.2rem;
    }
  }
`;

const StyledImage = styled.img`
  @media all and (max-width: 390px) {
    width: 55%;
    height: 55%;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  bottom: 110px;

  @media all and (max-width: 390px) {
    bottom: 72px;
  }
`;
