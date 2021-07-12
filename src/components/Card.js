import React from 'react';
import styled from 'styled-components';

const light_blue = "#0096ff";
const dark_blue = "#111827";
const light_grey = "#f6f7f8";
const dark_grey = "#374151";

const Card = (props) => {
  return (
    <Container>
        <img src={props.img} />
        <CardBody>
          <CardText>
            <h2 className="card_title">{props.title}</h2>
            <p className="card_description">{props.description}</p>
            <p className="technologies">{props.technologies}</p>
          </CardText>
          <ButtonArea>
            {props.link_one ? <a className="link1" href={props.link_one}>{props.link_one_text}</a> : null}
            {props.link_two ? <a className="link2" href={props.link_two}>{props.link_two_text}</a> : null}
            {props.link_three ? <a className="link3" href={props.link_three}>{props.link_three_text}</a> : null}
          </ButtonArea>
        </CardBody>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  //box-shadow: 0px 2px 4px 0px #888888;
  //box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
  box-shadow: 0 3px 6px -1px rgb(0 0 0 / 10%), 0 5px 10px -2px rgb(0 0 0 / 10%);
  //box-shadow: 2px 2px 2px #11111122;
  text-align: left;
  border-radius: 0.5rem;
  //border: solid 1px ${light_blue};
  height: 100%;
  position: relative;
  overflow: hidden;
  background: white;
  img {
    width: 100%;
    display: block;
    //height: 12rem;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  h2 {
    font-size: 1rem;
    //margin-top: 1rem;
    //text-align: left;
    //padding: 1rem;
  }

  .card_description {
    //margin: 1rem 2rem 3rem 2rem;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    font-style: italic;
  }

  .technologies {
    font-size: 0.8rem;
    //font-family: ui-sans-serif, sans-serif;
  }

  a {
    //display: inline-block;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.4rem;
    //width: 5rem;
    //margin: 0.6rem;
    text-decoration: none;
    //background: ${dark_blue};
    border: solid 1px #aaaaaa;
    color: ${dark_grey};
    border-radius: 2rem;

    //border-bottom: 4px solid ${light_blue};
    //border-radius: 0.5rem;
    &:hover {
      background-color: ${dark_blue};
      color: ${light_grey};
      border: 1px solid ${dark_blue};
    } 
  }

  .line {
    border-top: 1px solid #dddddd;
    margin: 0 1rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0 1rem;
    padding: 0;
  }
`;

const CardText = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const CardBody = styled.div`
  //flex-grow : 1;
  /* box-sizing: border-box; 
  margin: 0;
  padding: 0; */
  //position: relative;
  //height: 12rem;
  height: calc(100% - 12rem - 1px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const ButtonArea = styled.div`
  /* position: absolute;
  bottom: 0; */
  //background: ${dark_blue};
  display: grid;
  //text-transform: uppercase
  //margin: 0.5rem 1rem;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "github website tutorial";
  grid-gap: 0.5rem;
  //background-color: ${dark_blue};
  .link1{
    grid-area: github;
  }
  .link2{
    grid-area: website;
  }
  .link3{
    grid-area: tutorial;
  }
  //position: absolute;
  //bottom: 0;
  //margin: 1rem;
`;
export default Card;