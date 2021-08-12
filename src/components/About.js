import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1><span className="title">About</span></h1>
      <Text>
        <p>
          Hi, I'm <strong>Philipp</strong>. I'm currently doing my Master's degree in Computer
          Science at RWTH Aachen University in Germany. There I'm specializing in Data Science and
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
        <p>
          <strong>Feel free to contact me anytime!</strong>
        </p>
        {/* <p>Feel free to <a href="mailto:ptckant@gmail.com"
            target="_blank"
            className="shadow-underline"
            rel="noopener noreferrer"
            title="Email">contact</a> me anytime!</p> */}

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
.title {
  box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  /* border: solid 0em;
  border-radius: 0.5rem; */
}
  h1 {
    /* text-decoration: underline overline;
  text-decoration-style: solid;
  text-decoration-color: #FF2A00; */
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
    //color: #111827;
  }

  .shadow-underline {
  box-shadow: inset 0 -0.45em 0 #F58F29;
  transition: box-shadow .3s ease;
}

.shadow-underline:hover, .shadow-underline:active {
  box-shadow: inset 0 -1.25em 0 #F58F29;
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
