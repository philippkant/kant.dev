import React, { useState, useEffect } from 'react';
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
  useLocation,
  // useRouteMatch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Tutorials from './components/Tutorials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyle';

const color1 = '#f6f7f8';

const Container = styled.div`
  //background: ${color1};
  //height: 100vh;
  //height: 100vh;
  //height: 100%
  //max-width: 80rem;
  //margin: 0 auto;
  //box-sizing: border-box;
  //color: #111827;
  //filter: brightness(0);
  //background: blue;
  //background: #4464ad; //#6495ED //#3263A0 //#003153
  background: ${(props) => (props.location ? '#f6f7f8' : '#4464ad')};
`;

const Content = styled.div`
  min-height: calc(100vh - 3.3rem);
  margin-bottom: -3.5rem;
  //background: yellow;

  z-index: 10;
  //background: yellow;
  //opacity: ${(props) => (props.isOpen ? '0.5' : '1.0')};
  //background-color: hsla(0,0%,7%,.36);
  //filter: ${(props) => (props.isOpen ? 'brightness(0.8) blur(4px)' : 'none')};
  //opacity: ${(props) => (props.isOpen ? '0.2' : '1.0')};
  //background-color: ${(props) => (props.isOpen ? '#888888' : '${color1}')};
  //transition: opacity .25s,visibility 0s linear .25s;
  filter: ${(props) => (props.isOpen ? 'blur(0.2rem)' : 'none')};

  
  //transition: filter 0.3s ease-out;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 3.3rem;
  //padding-top: 4rem;
  //padding-left: 0.5rem;
  //padding-right: auto;
  //background: yellow;
  //width: 100%;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  let path = useLocation().pathname;
  const location = path.split("/")[1];
  console.log(location);
  useEffect(() => {
    let title = path.substring(1);
    if (!title) {
      title = 'home';
    }
    document.title =
      title[0].toUpperCase() + title.slice(1) + ' | ' + 'kant.dev';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div>
      <GlobalStyles />
      <Container location={location}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main>
          <Content isOpen={isOpen} >
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/tutorials">
                <Tutorials />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
        </main>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
