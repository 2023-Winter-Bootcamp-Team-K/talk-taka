import styled from 'styled-components';

export default function FaceBox({ picture }: { picture: string | undefined }) {
  const imageUrl = picture || '';

  return (
    <CameraLayout>
      <BubbleLayout src={'src/assets/img/HeartBubble.png'} />
      <CameraBoxLayout>
        <img src={imageUrl} />
      </CameraBoxLayout>
    </CameraLayout>
  );
}

const CameraLayout = styled.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 30rem;
    height: 33.125rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 17.4375rem;
    box-shadow: none;
  }
`;

const CameraBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: #d9d9d9;

  @media all and (min-width: 391px) {
    margin-top: 1.37rem;
    margin-bottom: 6.12rem;
    width: 26.1875rem;
    height: 19.625rem;
    border-radius: 1.3125rem;
  }
  @media all and (max-width: 390px) {
    /* align-items: center;
    justify-content: center; */

    /* margin-top: 1rem;
    margin-bottom: 1rem; */
    width: 18.5625rem;
    height: 15.8125rem;
    border-radius: 1.75rem;
  }
`;

const BubbleLayout = styled.img`
  @media all and (min-width: 391px) {
    width: 4.6875rem;
    height: 4.6875rem;
    margin-top: 1.31rem;
  }
  @media all and (max-width: 390px) {
    display: none;
  }
`;
