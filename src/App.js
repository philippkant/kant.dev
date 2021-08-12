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
import NotFound from './components/NotFound';
import GlobalStyles from './styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme.js';

const color1 = '#E6EBE0';
const color2 = '#5D576B';

const Container = styled.div`
  //background: ${color1};
  //height: 100vh;
  //height: 100vh;
  //height: 100%
  //max-width: 80rem;
  //margin: 0 auto;
  //box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: color 0.5s, background-color 0.5s;
  color: ${(props) => props.theme.text};
  //filter: brightness(0);
  //background: blue;
  //background: #4464ad; //#6495ED //#3263A0 //#003153
  background: ${(props) => (props.location ? props.theme.background : props.theme.backgroundStart)};
  
`;

const Content = styled.div`
  min-height: calc(100vh - 3.5rem);
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
  margin-top: 3.5rem;
  //padding-top: 4rem;
  //padding-left: 0.5rem;
  //padding-right: auto;
  //background: yellow;
  //width: 100%;
`;

const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    console.log(scroll);
    document.addEventListener('scroll', () => {
        setScroll(window.scrollY > 1);
    });
  }, []);

  const [theme, setTheme] = useState('light');

  const [isOpen, setIsOpen] = useState(false);
  let path = useLocation().pathname;
  const location = path.split('/')[1];
  //console.log(location);
  useEffect(() => {
    let title = path.substring(1);
    if (!title) {
      title = 'home';
    }

    if (title !== 'about' && title !== 'projects' && title !== 'home') {
      title = '404';
    }
    document.title =
      title[0].toUpperCase() + title.slice(1) + ' | ' + 'kant.dev';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container location={location}>
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            theme={theme}
            setTheme={setTheme}
            scroll={scroll}
            location={location}
          />
          <main>
            <Content isOpen={isOpen}>
              <Switch>
                {/* <Route path="/contact">
                <Contact />
              </Route> */}
                {/* <Route path="/tutorials">
                <Tutorials />
              </Route> */}
                <Route exact path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </Content>
          </main>
          <Footer location={location} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
