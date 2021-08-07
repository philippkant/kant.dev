import React from 'react';
import styled from 'styled-components';
import Card from './Card';

//link_three="https://kant.dev/tutorials"
//link_three_text="Tutorial"

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      <Grid>
      <Card
        img={require('../images/twitterbot.png')}
        title="History Twitter bot"
        description="Twitter bot that tweets about historical events that happened on this date."
        technologies="Javascript - Node.js - Express.js - Heroku"
        link_one="https://github.com/philippkant/twitter-history-bot"
        link_two="https://twitter.com/historyyearsago"
        link_one_text="Github"
        link_two_text="Website"
      />
      <Card
        img={require('../images/learncity.png')}
        title="Learn City (Hackathon)"
        description="My team's submission for the Level-Up Society hackathon. It was then further developed by me and a friend."
        technologies="Javascript - Kaboom.js - Bootstrap"
        link_one="https://github.com/EinGuterWaran/LearnCity"
        link_two="https://einguterwaran.github.io/LearnCity/"
        link_three="https://devpost.com/software/learn-city"
        link_one_text="Github"
        link_two_text="Website"
        link_three_text="Devpost"
      />
      {/* <Card
        img={require('../images/portfolio.png')}
        title="kant.dev"
        description="My team's submission for the Level-Up Society hackathon. It was then further developed by me and a friend."
        technologies="Javascript - Kaboom.js - Bootstrap"
        link_one="https://github.com/EinGuterWaran/LearnCity"
        link_two="https://einguterwaran.github.io/LearnCity/"
        link_three="https://devpost.com/software/learn-city"
        link_one_text="Github"
        link_two_text="Website"
        link_three_text="Devpost"
      /> */}

      <Card
        img={require('../images/kantdev.png')}
        title="kant.dev"
        description="My personal website that you are currently viewing."
        technologies="Javascript - React.js - 
        styled-components"
        link_one="https://github.com/philippkant/twitter-history-bot"
        link_two="https://kant.dev"
        link_one_text="Github"
        link_two_text="Website"
      />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`

  h1 {
    font-size: 3rem;
    padding: 1rem;
    padding-top: 4rem;

  }
`;

const Grid = styled.div`
  box-sizing: border-box; 
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  //grid-template-rows: 1fr;
  grid-auto-rows: 24rem;
  grid-gap: 2rem;
  justify-content: center;
`;

export default Projects;