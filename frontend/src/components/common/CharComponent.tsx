import styled from 'styled-components';
import Voice from '../gif/Voice';
import { VoiceSvg } from '../../assets/SVG';
import { useChatStore } from '../../stores/chat';

export default function CharComponent() {
  const { RecordToggle } = useChatStore();
  console.log(RecordToggle, 'RecordToggle');

  return (
    <Layout>
      <SpeakingQuakka src="src/assets/img/SpeakingQuakka.png" />
      {RecordToggle ? (
        <>
          <VoiceSvg />
          <div style={{ marginBottom: '1.125rem' }} />
        </>
      ) : (
        <Voice />
      )}
    </Layout>
  );
}

const SpeakingQuakka = styled.img`
  width: 30rem;
  margin-top: 6.57rem;

  @media all and (max-width: 390px) {
    width: 18.60675rem;
    margin-top: 5.41rem;
  }
`;

const Layout = styled.div`
  width: 30rem;
  height: 43.75rem;
  border-radius: 1.75rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);

  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
    box-shadow: none;
  }
`;
