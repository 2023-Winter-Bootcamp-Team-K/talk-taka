import styled from 'styled-components';

interface OpponentMessageProps {
  chatMessage: string;
}

const OpponentMessage: React.FC<OpponentMessageProps> = ({ chatMessage }) => {
  return (
    <OpponentMessageContainer>
      <StyledOpponentMessage>{chatMessage}</StyledOpponentMessage>
    </OpponentMessageContainer>
  );
};

const OpponentMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 0.62rem;
  padding-left: 1.87rem;
  box-sizing: border-box;
`;

const StyledOpponentMessage = styled.div`
  display: flex;
  flex: 1;
  padding: 1.5rem 2.2rem;
  flex-direction: column;
  margin-right: auto;
  gap: 0.5rem;
  max-width: 15rem;
  border-radius: 1.75rem 1.75rem 1.75rem 0rem;
  background: #997852;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default OpponentMessage;
