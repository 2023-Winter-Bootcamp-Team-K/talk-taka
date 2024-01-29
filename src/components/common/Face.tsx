import styled from 'styled-components';

export default function FaceBox({ picture }: { picture: string | undefined }) {
  const defaultImageUrl = 'src/assets/img/DefaultResultImage.png';
  const imageUrl = picture || defaultImageUrl;
  const isDefaultImage = imageUrl === defaultImageUrl;

  return (
    <CameraLayout>
      <BubbleLayout src={'src/assets/img/HeartBubble.png'} />
      <CameraBoxLayout isDefaultImage={isDefaultImage}>
        <img
          src={imageUrl}
          alt="Face or Default Image"
          style={{ width: '100%', height: 'auto' }}
        />
        {isDefaultImage && (
          <DefaultImageText>이 날 찍은 사진이 없어요</DefaultImageText>
        )}
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
    /* width: 21.4375rem;
    height: 17.4375rem;
    box-shadow: none; */
    display: none;
  }
`;

const CameraBoxLayout = styled.div<{ isDefaultImage?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ isDefaultImage }) => (isDefaultImage ? 'none' : '#d9d9d9')};

  img {
    margin-top: 1.37rem;
    margin-bottom: 6.12rem;
    border-radius: 1.3125rem;

    ${({ isDefaultImage }) =>
      isDefaultImage &&
      `
        width: 20rem;
        height: auto; 
        background: none;
      `}
  }

  @media all and (max-width: 390px) {
    display: none;
  }
`;

const DefaultImageText = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  line-height: normal;
  margin-top: -4rem;
  font-size: 1.5rem;
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
