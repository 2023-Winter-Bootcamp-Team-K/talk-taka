import styled from 'styled-components';

type CharComponentProps = {
  isListening: boolean;
};

export default function CharComponent({ isListening }: CharComponentProps) {
  const micOn = 'src/assets/img/mingcute_voice-fill.svg';
  const micOff = 'src/assets/img/mingcute_voice-fill.svg';  // 움직이는 이미지로 수정해야 함

  return (
    <Layout>
      <SpeakingQuakka src="src/assets/img/SpeakingQuakka.png" />
      <MicIcon src={isListening ? micOn : micOff} />
    </Layout>
  );
}

const SpeakingQuakka = styled.img`
  width: 30rem;
  margin-top: 6.25rem;
  margin-bottom: 1rem;
`;

const MicIcon = styled.img`
  width: 3.81625rem;
  height: 3.50875rem;
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Layout = styled.div`
  width: 30rem;
  height: 43.75rem;
  border-radius: 1.75rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
