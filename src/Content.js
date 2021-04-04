import React, { useState } from 'react';
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

const Content = () => {
  return (
    <div>
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

export default Content;
