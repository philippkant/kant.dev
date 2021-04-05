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
  z-index: 10;
  //opacity: ${(props) => (props.isOpen ? '0.5' : '1.0')};
  //background-color: hsla(0,0%,7%,.36);
  filter: ${(props) => (props.isOpen ? 'brightness(0.8) blur(4px)' : 'none')};
  //transition: opacity .25s,visibility 0s linear .25s;
  transition: filter 0.3s ease-out;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content isOpen={isOpen}>
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
