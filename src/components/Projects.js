import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/twitterbot.png')}
          title="History Twitter bot"
          description="Twitter bot that tweets about historical events that happened on this date."
          technologies="Javascript - Node.js - Express.js - Heroku"
          link_two="https://twitter.com/historyyearsago"
          link_three="https://github.com/philippkant/twitter-history-bot"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/learncity.png')}
          title="Learn City (Hackathon)"
          description="My team's submission for the Level-Up Society hackathon. It was then further developed by me and a friend."
          technologies="Javascript - Kaboom.js - Bootstrap"
          link_one="https://devpost.com/software/learn-city"
          link_two="https://einguterwaran.github.io/LearnCity/"
          link_three="https://github.com/EinGuterWaran/LearnCity"
          link_one_text="Devpost"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/kantdev.png')}
          title="kant.dev"
          description="My personal website that you are currently viewing."
          technologies="Javascript - React.js -"
          technologies2="styled-components - Netlify"
          link_two="https://kant.dev"
          link_three="https://github.com/philippkant/philippkant.com"
          link_two_text="Website"
          link_three_text="Github"
        />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
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

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Projects;
