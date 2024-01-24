import styled from 'styled-components';
import MyMessage from './MyMessage';
import OpponentMessage from './OpponentMessage';

export default function ChatBoxResult({
  content,
}: {
  content: { Question?: string; child?: string }[] | undefined;
}) {
  const messages = content || [];

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
            return (<MyMessage key={index} chatMessage={message.child} />);
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
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);

  @media all and (min-width: 391px) {
    height: 43.75rem;
  }
  @media all and (max-width: 390px) {
    height: 26rem;
    width: 22rem;
    background: transparent;
  }
`;

const ChatBoxLayout = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 35rem;
    margin-top: 2.19rem;
  }
  @media all and (max-width: 390px) {
    width: 22rem;
    background: transparent;
  }
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
