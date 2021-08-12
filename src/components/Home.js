import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import img from '../images/profile.jpg';

const color1 = '#9BC1BC';
const color2 = '#5D576B';
//const color2 = '#5D576B';

const Container = styled.div`
  //color: #000000;
  //background-color: #f6f7f8;
  //padding: 30px 75px;
  //margin-top: 100px;
  //@media (max-width: 768px) {
  //  padding: 35px 25px;
  // }
  height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  //background: #4464ad; //#6495ED //#3263A0 //#003153
`;

const Home = () => {
  return (
    <Container>
      <Introduction>
        <ProfileCard>
          <div className="image-cropper">
            {/* <img src={require('../images/profile3.jpg')} alt="Profile" /> */}
          </div>
          <div className="profile-text">
            <div className="hi">Hi! I'm</div>
            <h1>Philipp&nbsp;Kant</h1>
          </div>
        </ProfileCard>
        {/* <p>Hi! I'm</p>
        <h1>Philipp Kant</h1> */}
        <div className="short">
          {/* Software Developer. Computer Science student. Data */}A Software
          Developer and Computer Science student that loves doing Web
          Development and Data Science.
          {/* Computer Science student with focus on Data Science. Currently learning web development. */}
        </div>
        {/* <h2>Computer Science student</h2>
        <h2>Software Developer</h2>
        <h2>Data Scientist</h2> */}
        <Social>
          <div className="iconcontainer">
          <a
            className="same"
            href="https://github.com/philippkant/"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Github profile"
          >
            <FaGithub size="1.5rem" className="icon" />
            <span className="icontext">Github</span>
          </a>
          </div>
          <div className="iconcontainer">
          <a
            className="same"
            href="https://www.linkedin.com/in/philippkant/"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Github profile"
          >
            <FaLinkedin size="1.5rem" className="icon"/>
            <span className="icontext">LinkedIn</span>
          </a>
          </div>
          <div className="iconcontainer">
          <a
            className="same"
            href="mailto:ptckant@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Github profile"
          >
            <FaEnvelope size="1.5rem" className="icon"/>
            <span className="icontext">Email</span>
          </a>
          </div>
        </Social>
      </Introduction>
    </Container>
  );
};

const ProfileCard = styled.div`
  height: 8rem;
  display: flex;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};


  @media (max-width: 40rem) {
    max-width: 20rem;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    height: auto;

    padding: 0;
    margin: 0;
  }

  .image-cropper {
    box-sizing: border-box;
    height: 8rem;
    width: 8rem;
    background-image: url(${img});
    background-size: cover;
    //border-radius: 8rem;
    @media (max-width: 40rem) {
      height: 7rem;
      width: 7rem;
    }
    //padding: 1rem;
    //overflow: hidden;

    border-radius: 50%;
    border: solid ${(props) => props.theme.menuLinkActive} 0.2rem;
    
  }

  img {
    height: 8rem;
    @media (max-width: 40rem) {
      height: 7rem;
    }
    
    //outline: 0.3rem solid #F58F29 ;
  }

  .hi {
    
    font-size: 2.2rem;
    letter-spacing: -0.1rem;
    

    //font-weight: 400;
    @media (max-width: 40rem) {
      padding-top: 1rem;
      font-size: 1.9rem;
      text-align: center;
      letter-spacing: -0.086rem;
    }

  }

  h1 {
    transition: color 0.5s;
    color: ${(props) => props.theme.menuLinkActive};
    font-weight: 700;
    margin: 0;
    //padding-top: 0.0rem;
    //padding: 1rem;
    font-size: 4.4rem;
    letter-spacing: -0.2rem;
    //padding: 1rem;
    @media (max-width: 40rem) {
      letter-spacing: -0.17rem;
      font-size: 3.8rem;
    }

    @media (max-width: 20rem) {
      letter-spacing: -0.17rem;
      font-size: 3.6rem;
    }
  }

  .profile-text {
    padding: 0 1rem;
    @media (max-width: 40rem) {
      padding: 0;
    }


  }
`;

// const Text = styled.div`
//   /* background: green;
//   height: 40rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center; */
//   //align-items: center;
//   //margin: 0;

//   /* height: 20rem;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   //text-align: center;
//   h1 {
//     font-size: 3rem;
//     padding: 1rem;
//   } */
// `;

const Introduction = styled.div`
  
  //align-self: center;
  //border: 2px solid;
  max-width: 34rem;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};

  .short {

    padding: 1rem;
    letter-spacing: -0.03rem;
    font-size: 1.2rem;
    font-weight: 400;
    box-sizing: border-box;

    @media (max-width: 40rem) {
    padding: 1rem;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0rem;
    max-width: 20rem;
  }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 40rem) {
      font-size: 0;
  }
  }
  //margin: 0 auto;

  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //padding: 5rem;
  //text-align: center;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Social = styled.div`
  a {
    transition: color 0.5s;
    color: ${(props) => props.theme.socialStart};
    &:hover {
      color: ${(props) => props.theme.socialStartHover};
    }
    &:focus {
      color: ${(props) => props.theme.socialStartHover};
    }
  }
  /* .iconcontainer {
    color: red !important;
  } */
  /* .icon {
    color: #111827;
    &:hover {
      color: green;
    }
  }
  .icontext {
    color: #111827;
  } */

@media (max-width: 40rem) {
    max-width: 20rem;
  }

  //padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 40rem) {
      gap: 0.5rem;
  }
  //align-items: center;
  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    a {
      width: 5.8rem;
    } */
  //flex-grow: 1;
  //flex: 0 0 0px;
  //align-self: center;
  //justify-content: flex-start;
  //flex: 1 1 auto;
  /* .same {
    flex: 1 1 auto;
  } */
  //align-items: center;
  //margin: 0 auto;
  //}
  /* vertical-align: auto; */
  //flex-grow: 1;

  gap: 1.5rem;
  //padding: 1rem;
  //text-align: center;
`;

const HomeContainer = styled.div`
  margin: 0 auto;
`;

export default Home;
