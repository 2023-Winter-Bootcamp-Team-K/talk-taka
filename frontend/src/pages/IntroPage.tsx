import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Btn';
import IntroImg from '../assets/img/인트로페이지.png';
import IntroPic from '../assets/img/introP.png';

export default function IntroPage() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/login');
  };

  return (
    <BackGround>
      <div style={{ position: 'relative', top: '90%', height: '2.3125rem' }}>
        <Button
          borderr="0.5625rem"
          title="바로 시작하기"
          onClick={goToMain}
          width="22.1875rem"
        />
      </div>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url(${IntroImg});
  /* margin: auto; */
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
  display: flex;
  text-align: center;
  justify-content: center;
  object-fit: fill;
  position: absolute;
  justify-content: center;
  object-fit: fill;

  @media (max-width: 391px) {
    background-image: url(${IntroPic});
  }
`;
