import styled from 'styled-components';

interface OpponentMessageProps {
  chatMessage: string | undefined;
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
  @media all and (max-width: 390px) {
    margin-bottom: 0.37rem;
    padding-left: 1.38rem;
  }
`;

const StyledOpponentMessage = styled.div`
  display: flex;
  flex: 1;
  padding: 0.75rem 1rem;
  flex-direction: column;
  margin-right: auto;
  max-width: 15rem;
  border-radius: 1rem 1rem 1rem 0rem;
  background: #997852;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 1.25rem;

  @media all and (max-width: 390px) {
    margin-bottom: 0.37rem;
    font-size: 1rem;
  }
`;

export default OpponentMessage;
