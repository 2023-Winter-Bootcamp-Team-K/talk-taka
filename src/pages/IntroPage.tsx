import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Btn';

export default function IntroPage() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/login'); //추후 추가
  };
  return (
    <BackGround>
      <Button
        borderR="0.5625rem"
        title="바로 시작하기"
        onClick={goToMain}
        marginT="55rem"
        width="22.1875rem"
      />
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/인트로페이지.png');
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
