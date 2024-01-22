import styled from 'styled-components';
import MyMessage from './MyMessage';
import OpponentMessage from './OpponentMessage';
import { useState } from 'react';
import AudioRecorder from './AudioRecorder';

type ChatBoxProps = {
  isShowChar: () => void;
};

export default function ChatBox({ isShowChar }: ChatBoxProps) {
  const [messages, setmessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  return (
    <ChatLayout>
      <ChatBoxLayout>
        <MyMessage chatMessage="안녕" />
        <OpponentMessage chatMessage="안녕" />
      </ChatBoxLayout>
      <TextBox>말을 다하면 나를 눌러줘</TextBox>
      <AudioRecorder isShowChar={isShowChar} />
    </ChatLayout>
  );
}

const ChatLayout = styled.div`
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
    width: 22rem;
    height: 34rem;
    background: transparent;
    box-shadow: none;
  }
`;

const ChatBoxLayout = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  background: rgba(255, 255, 255, 0.82);
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    margin-top: 2.19rem;
    border-radius: 1.75rem;
  }
  @media all and (max-width: 390px) {
    width: 22rem;
    background: transparent;
  }
`;

const TextBox = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 0.68rem;
    font-size: 1rem;
  }
`;
