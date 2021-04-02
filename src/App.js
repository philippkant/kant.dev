import React, { useState } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
// import './App.css';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
  // useParams,
  // useHistory,
  // useRouteMatch,
} from 'react-router-dom';

import styled from 'styled-components';

const Home = () => (
  <div>
    <h2>Hey, I&apos;m Philipp!</h2>
    <p>Welcome to my homepage :)</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>Hey, I&apos;m Philipp!</h2>
    <p>Welcome to Projects :)</p>
  </div>
);

const Notes = () => (
  <div>
    <h2>Hey, I&apos;m Philipp!</h2>
    <p>Welcome to Notes :)</p>
  </div>
);

const About = () => (
  <div>
    <h2>Hey, I&apos;m Philipp!</h2>
    <p>Welcome to About :)</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Hey, I&apos;m Philipp!</h2>
    <p>Welcome to Contact :)</p>
  </div>
);

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/notes">notes</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>

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
    </div>
  );
};

export default App;
