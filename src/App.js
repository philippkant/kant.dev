import React, { useState } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';

import styled from 'styled-components';
import Navbar from './Navbar';
import Content from './Content';

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
};

export default App;