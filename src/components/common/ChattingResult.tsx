import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MyMessage from './MyMessage';
import OpponentMessage from './OpponentMessage';
import { baseInstance } from '../../api/config';

export default function ChatBoxResult() {
  const [messages, setMessages] = useState<
    { Question?: string; child?: string }[]
  >([]);

  const chat_room_id = 7;
  useEffect(() => {
    baseInstance
      .get(`/apps/chat_list/${chat_room_id}/`)
      .then((response) => {
        setMessages(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ChatLayout>
      <ChatBoxLayout>
        {messages.map((message, index) => {
          if (message.Question) {
            return (
              <OpponentMessage key={index} chatMessage={message.Question} />
            );
          }
          if (message.child) {
            return <MyMessage key={index} chatMessage={message.child} />;
          }
          return null;
        })}
      </ChatBoxLayout>
      <BottomLayout></BottomLayout>
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

const BottomLayout = styled.button`
  all: unset;
  margin-bottom: 1.19rem;
  margin-top: 1.66rem;
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;
