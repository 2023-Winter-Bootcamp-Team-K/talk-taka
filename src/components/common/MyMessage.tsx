import styled from 'styled-components';

interface MyMessageProps {
  chatMessage: string | undefined;
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
  @media all and (max-width: 390px) {
    margin-bottom: 0.37rem;
    padding-right: 1.38rem;
  }
`;
const StyledMyMessage = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  flex-direction: column;
  margin-left: auto;
  max-width: 15rem;
  border-radius: 1rem 1rem 0rem 1rem;
  background: #526699;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 1.25rem;
  @media all and (max-width: 390px) {
    font-size: 1rem;
  }
`;

export default MyMessage;
