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
import GlobalStyles from './styles/GlobalStyle';

const color1 = '#f6f7f8';

const Container = styled.div`
  background: ${color1};
  height: 100vh;
  //max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
  color: #111827;
  //filter: brightness(0);
`;

const Content = styled.div`
  z-index: 10;
  //opacity: ${(props) => (props.isOpen ? '0.5' : '1.0')};
  //background-color: hsla(0,0%,7%,.36);
  //filter: ${(props) => (props.isOpen ? 'brightness(0.8) blur(4px)' : 'none')};
  //opacity: ${(props) => (props.isOpen ? '0.2' : '1.0')};
  //background-color: ${(props) => (props.isOpen ? '#888888' : '${color1}')};
  //transition: opacity .25s,visibility 0s linear .25s;
  filter: ${(props) => (props.isOpen ? 'blur(0.2rem)' : 'none')};
  //transition: filter 0.3s ease-out;
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 7rem;
  padding-left: 0.5rem;
  padding-right: auto;
  //width: 100%;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <GlobalStyles />
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
    </div>
  );
};

export default App;
