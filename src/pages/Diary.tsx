import React from 'react';
import styled from 'styled-components';

export default function Diary() {
  return (
    <>
      <BackGround>
        <Book>
          {/* <Left></Left>
          <Right></Right> */}
        </Book>
      </BackGround>
    </>
  );
}

const BackGround = styled.div`
  background-image: url('src/assets/img/Chat_bg.png');
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Book = styled.div`
  background-image: url('src/assets/img/book.png');
  width: 73.75rem;
  height: 53.125rem;
  display: flex;
`;
