import React, { useState } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';

import styled from 'styled-components';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useParams,
  // useHistory,
  // useRouteMatch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Notes from './components/Notes';
import About from './components/About';
import Contact from './components/Contact';

const color1 = '#f6f7f8';

const Container = styled.div`
  background: ${color1};
  height: 100vh;
`;

const Content = styled.div`

`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Content>
    </Container>
  );
};

export default App;