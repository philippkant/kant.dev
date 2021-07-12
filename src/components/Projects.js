import React from 'react';
import styled from 'styled-components';
import Card from './Card';

//link_three="https://kant.dev/tutorials"
//link_three_text="Tutorial"

const Projects = () => {
  return (
    <ProjectsContainer>
      <Grid>
      <Card
        img={require('../images/twitterimg.png')}
        title="Twitter bot"
        description="Twitter bot that tweets about historical events that happened on this date."
        technologies="Javascript - Node.js - Express.js - Heroku"
        link_one="https://github.com/philippkant/twitter-history-bot"
        link_two="https://twitter.com/historyyearsago"
        link_one_text="Github"
        link_two_text="Website"
      />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`

  h1 {
    text-align: center;
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