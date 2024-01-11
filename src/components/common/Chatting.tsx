import styled from 'styled-components';
import MyMessage from './MyMessage';
import OpponentMessage from './OpponentMessage';
import { Mic } from '../../assets/SVG';
import { useState } from 'react';

export default function ChatBox() {
  const [messages, setmessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  return (
    <ChatLayout>
      <ChatBoxLayout>
        <MyMessage chatMessage="안녕" />
        <OpponentMessage chatMessage="안녕" />
      </ChatBoxLayout>
      <MicButtonLayout>
        <Mic />
      </MicButtonLayout>
    </ChatLayout>
  );
}

const ChatLayout = styled.div`
  width: 35.0625rem;
  max-height: 43.75rem;
  min-height: 43.75rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChatBoxLayout = styled.div`
  width: 35rem;
  margin-top: 2.19rem;
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.82);
  /* box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13); */
  display: flex;
  flex-direction: column;
`;

const MicButtonLayout = styled.button`
  all: unset;
  margin-bottom: 1.19rem;
  margin-top: 1.66rem;
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;
