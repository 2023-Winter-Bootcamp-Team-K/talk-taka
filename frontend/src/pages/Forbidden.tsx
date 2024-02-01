import styled from 'styled-components';
import NotFound from '../assets/img/404.png';

export default function Forbidden() {
  return <BackGround />;
}

const BackGround = styled.div`
  background-image: url(${NotFound});
  background-position-x: 50%;
  background-position-y: 75%;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
`;
