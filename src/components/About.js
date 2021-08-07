import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  h1 {
    font-size: 3rem;
    padding: 1rem;
    padding-top: 4rem;
  }
`;

export default About;