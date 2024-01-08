import styled from 'styled-components';

interface MyMessageProps {
  chatMessage: string;
}

const MyMessage: React.FC<MyMessageProps> = ({ chatMessage }) => {
  return (
    <MyMessageContainer>
      <StyledMyMessage>{chatMessage}</StyledMyMessage>
    </MyMessageContainer>
  );
};

const MyMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 0.62rem;
  padding-right: 1.87rem;
  box-sizing: border-box;
`;

const StyledMyMessage = styled.div`
  display: flex;
  padding: 1.5rem 2.2rem;
  flex-direction: column;
  margin-left: auto;
  gap: 0.5rem;
  max-width: 15rem;
  border-radius: 1.75rem 1.75rem 0rem 1.75rem;
  background: #526699;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default MyMessage;
