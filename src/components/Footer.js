import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <Container>
      <Copyright><p>© 2021 Philipp Kant</p></Copyright>
      <Social>
          <a
            className="social"
            href="https://github.com/philippkant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.5rem" />
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/philippkant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="1.5rem" />
          </a>
          <a
            className="social"
            href="mailto:ptckant@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size="1.5rem" />
          </a>
      </Social>
    </Container>
  );
};

const Container = styled.footer`
  opacity: 0.5;
  box-sizing: border-box;
  //max-width: 60rem;
  /* position: relative;
  margin-top: -10rem;
  background: orange; */
  background: k; //#6495ED //#3263A0 //#003153
  height: 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0.5rem;
  padding: 0 3rem;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
  //border-top: solid 0.01rem rgba(0, 0, 0, 0.2);
  //align-content: center;
  
  //align-items: center;
  /* padding: 3rem;
  clear: both; */
`;

const Copyright = styled.div`
  //background: green;
  //flex-grow: 1;
`;

const Social = styled.div`
  //background: red;
  /* vertical-align: auto; */
  //flex-grow: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  //padding: 1rem;
  text-align: center;
`;



export default About;
