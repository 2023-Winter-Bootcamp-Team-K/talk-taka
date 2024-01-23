import styled from 'styled-components';

export default function FaceBox({ picture }: { picture: string | undefined }) {
  const imageUrl = picture || '';

  return (
    <CameraLayout>
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
    width: 31.25rem;
    height: 43.75rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
    box-shadow: none;
  }
`;

const CameraBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.82);

  @media all and (min-width: 391px) {
    margin-top: 5rem;
    margin-bottom: 3.19rem;
    width: 26.1875rem;
    height: 25.6875rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 5.31rem;
    margin-bottom: 2.87rem;
    width: 18.5625rem;
    height: 18.1875rem;
  }
`;
