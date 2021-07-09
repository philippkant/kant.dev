import React, { useState } from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <Container>
      <CardBody>
        <img src={props.img} />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </CardBody>
      <hr className="line"></hr>
      <ButtonArea>
        {props.link_code ? <a href={props.link_code}>Code</a> : null}
        <a href={props.link_website}>Website</a>
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  box-shadow: 0px 2px 4px 0px #888888;
  //box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
  text-align: center;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 15rem;
  }

  p {
    margin: 1rem 2rem 3rem 2rem;
    font-size: 0.9rem;
  }

  a {
    padding: 0.2rem 1rem;
    margin: 0.5rem;
    text-decoration: none;
    background: red;
    border-radius: 5px;
  }
  .line {
    //display: block;
    //border-top: 5px solid #0000001c;
  }
`;

const ButtonArea = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1rem;
`;

const CardBody = styled.div`
  
`;

export default Card;