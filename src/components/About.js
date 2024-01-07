import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          I am <strong>Philipp Kant</strong>, a passionate Data Scientist and Web Developer, holding a Master's degree in Computer Science with a specialization in Deep Learning from RWTH Aachen University. With a strong foundation in software development and a deep understanding of data analysis, here's what I offer:
        </p>
    <p>
        <ul>
          <li>Advanced knowledge in MACHINE LEARNING and DATA SCIENCE</li>
          <li>Extensive experience in WEB DEVELOPMENT and interface design</li>
          <li>Expertise in Python, JavaScript, and modern technologies</li>
          <li>Effective solutions for DATA PROCESSING and ANALYSIS</li>
          <li>Development of STRATEGIES for data integration and optimization</li>
        </ul>
    </p>
        <p>
          I bring a combination of technical expertise and practical experience to support companies as a consultant and freelance developer. My goal is to meet and exceed your digital ambitions with tailored, effective strategies and techniques. Let's talk about how I can advance your business with innovative data-driven solutions.
        </p>
        <p>
          <a
            class="shadow-underline"
            href={process.env.PUBLIC_URL + '/cv.pdf'}
            target="_blank"
          >
            View CV
          </a>
        </p>

        <p>
          <strong>Feel free to contact me anytime!</strong>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;
