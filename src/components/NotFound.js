import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <h1>404 Not Found</h1>
    </Container>

  );
};

const Container = styled.div`
  h1 {
    font-size: 5rem;
    padding: 2rem;
    padding-top: 4rem;
  }
`;
export default NotFound;