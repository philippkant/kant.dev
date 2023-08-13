import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Switch, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import GlobalStyles from './styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme.js';

const Container = styled.div`
  margin: 0;
  padding: 0;
  transition: color 0.5s, background-color 0.5s;
  color: ${(props) => props.theme.text};
  background: ${(props) =>
    props.location ? props.theme.background : props.theme.backgroundStart};
`;

const Content = styled.div`
  min-height: calc(100vh - 3.5rem);
  margin-bottom: 0rem;
  z-index: 10;
  filter: ${(props) => (props.isOpen ? 'blur(0.2rem)' : 'none')};
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 0rem;
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
