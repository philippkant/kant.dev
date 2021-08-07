import React from 'react';
import styled from 'styled-components';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <a href="https://www.google.com">
      <FaGithub size="20rem"/>
      </a>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 2rem;
`;


export default Contact;