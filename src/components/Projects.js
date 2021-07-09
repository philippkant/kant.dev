import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <div>
      <h2>Hey, I&apos;m Philipp!</h2>
      <Grid>
      <Card
        img={require('../images/twitter-bot.png')}
        title="Twitter bot"
        description="Twitter bot that tweets everyday what happened on that day in the past"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/testimg.png')}
        title="Data Analysis of Green Beans in the Sahahara"
        description="Multiple analysis with Python to some green beens asdf asd fas dfas dfasdf asdfsdfa sdfa sdfa sdfasdfa sdfasdf asdfasdfasdffasdasfas"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/twitter-bot.png')}
        title="Twitter bot"
        description="Twitter bot that tweets everyday what happened on that day in the past"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/testimg.png')}
        title="Data Analysis of Green Beans in the Sahahara"
        description="Multiple analysis with Python to some green beens"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/twitter-bot.png')}
        title="Twitter bot"
        description="Twitter bot that tweets everyday what happened on that day in the past"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/testimg.png')}
        title="Data Analysis of Green Beans in the Sahahara"
        description="Multiple analysis with Python to some green beens"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      <Card
        img={require('../images/twitter-bot.png')}
        title="Twitter bot"
        description="Twitter bot that tweets everyday what happened on that day in the past"
        link_code="https://github.com/philippkant/twitter-history-bot"
        link_website="https://twitter.com/historyyearsago"
      />
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  box-sizing: border-box; 
  margin: 2rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 2rem;
  justify-content: center;
`;

export default Projects;