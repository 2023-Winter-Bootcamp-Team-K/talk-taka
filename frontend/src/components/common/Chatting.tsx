import styled from 'styled-components';
import MyMessage from './MyMessage';
import OpponentMessage from './OpponentMessage';
import { useEffect, useState } from 'react';
import AudioRecorder from './AudioRecorder';
import { useRef } from 'react';

type ChatBoxProps = {
  sendChatArray: any[];
  sendChatting: any[];
};

export default function ChatBox({ sendChatArray, sendChatting }: ChatBoxProps) {
  const [messages, setMessages] = useState<
    { character?: string; message?: string }[]
  >([]);
  const [chat, setChat] = useState<{ character?: string; message?: string }[]>(
    []
  );
  const messageLayOutRef = useRef<HTMLDivElement | null>(null);

  const [End, setEnd] = useState<{ character?: string; message?: string }[]>(
    []
  );

  let Middle = [];

  //스크롤부분
  useEffect(() => {
    const messageLayOutElement = messageLayOutRef.current;
    if (messageLayOutElement) {
      messageLayOutElement.scrollTop = messageLayOutElement.scrollHeight;
    }
  });

  useEffect(() => {
    let test1 = [];
    let test2 = [];

    if (sendChatArray !== messages) {
      setMessages(sendChatArray);
      test1 = sendChatArray;
      console.log('messages', messages);
    }

    if (sendChatting !== messages) {
      setChat(sendChatting.flat());
      test2 = sendChatting.flat();
      console.log('chat', chat);
    }

    Middle = test2.flat();
    Middle = Middle.concat(test1);

    setEnd(Middle);
    //로그
    console.log('test1 로그', test1);
    console.log('test2 로그', test2);
    console.log('Middle 로그', Middle);
    console.log('End 로그', End);
  }, [sendChatArray, sendChatting]);

  return (
    <ChatLayout>
      <ChatBoxLayout ref={messageLayOutRef}>
        {End.slice(0, End.length - 1).map((message, index) => {
          if (message.character === 'quokka') {
            return (
              <OpponentMessage key={index} chatMessage={message.message} />
            );
          }
          if (message.character === 'child') {
            return <MyMessage key={index} chatMessage={message.message} />;
          }
          return null;
        })}
      </ChatBoxLayout>
      <TextBox>말을 다하면 나를 눌러줘</TextBox>
      <AudioRecorder />
    </ChatLayout>
  );
}

const ChatLayout = styled.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    height: 43.75rem;
    box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
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
