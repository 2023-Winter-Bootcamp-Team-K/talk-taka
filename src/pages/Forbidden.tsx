import styled from 'styled-components';

export default function Forbidden() {
  return <BackGround />;
}

const BackGround = styled.div`
  background-image: url('src/assets/img/404.png');
  background-position-x: 50%;
  background-position-y: 75%;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
`;
