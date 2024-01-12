import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();
  const goToIntro = () => {
    navigate('/');
  };

  return (
    <BackGround>
      <Top></Top>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Chat_bg.png');
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 70%;
  background-position-y: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
`;

const Top = styled.div`
  margin-top: 8.44rem;
`;
