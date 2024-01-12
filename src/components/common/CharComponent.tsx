import styled from 'styled-components';
import Voice from '../gif/Voice';

type CharComponentProps = {
  isListening: boolean;
};

export default function CharComponent({ isListening }: CharComponentProps) {
  const micOn = 'src/assets/img/mingcute_voice-fill.svg';

  return (
    <Layout>
      <SpeakingQuakka src="src/assets/img/SpeakingQuakka.png" />
      {/* <MicIcon src={isListening ? micOn : <Voice />} /> */}
      <Voice />
    </Layout>
  );
}

const SpeakingQuakka = styled.img`
  width: 30rem;
  margin-top: 6.25rem;
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
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
`;
