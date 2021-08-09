import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <Text>
        <p>
          Hi, I'm Philipp. I'm currently doing my Master's degree in Computer
          Science at RWTH Aachen University in Germany. I specialize in Data Science and
          Machine Learning.
        </p>
        <p>
          Besides studying I enjoy building things and am usually busy with side
          projects. 
          My favourite languages are Python and Javascript. 
          Currently I love creating web applications using the PERN stack.
          When I'm not in front of a computer screen, I like to spend time outdoors, do sports, play football (soccer)
          or just hang out with friends.
          
        </p>
        <p>Feel free to email me anytime!</p>

        {/* 
        , I'm probably in my free time I love to do
          sports, especially football (soccer), tennis and other ball sports.
         and learn something new in Web Development every day
        Right now I'm interested in Web Development, 
        Although it is a wide-ranging course programme and I am comfortable specialize in Data Science and Machine Learning. Besides studying I enjoy building things.
        Currently I am interested in building web applications
        I specialize In my free time I enjoy building things. My current goal is to strengthen my 

        Get in touch with me if you have any opportunities you would like to discuss. */}
      </Text>
    </Container>
  );
};

const Container = styled.div`
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
  font-weight: 400;

  @media (max-width: 40rem) {
    font-size: 1rem;
    padding: 1.5rem;
    font-weight: 400;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.5rem;
  }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  /* a {
    //display: inline-block;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.4rem;
    //width: 5rem;
    //margin: 0.6rem;
    text-decoration: none;
    border: solid 1px #aaaaaa;
    color: #222222;
    border-radius: 2rem;

    //border-radius: 0.5rem;
    &:hover {
      background-color: #000;
      color: #ccc;
      border: 1px solid #000;
    } 
  } */
`;

export default About;
