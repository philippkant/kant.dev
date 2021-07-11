import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen }) => {
  const node = useRef(null);
  const handleClickOutside = (e) => {
    console.log('clicking anywhere');
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(node.current);
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };
  const color2 = '#0096ff';
  //const color3 = '#19294a';
  const style = {color: color2}
                 //fontWeight: 'bold'};
  // ref={node} was the crucial thing I forgot, don't know what it means
  return (
    <Parent ref={node}>
      <Nav>
        <Logo href="">
          kant<span>.dev</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink activeStyle={style} exact to="/" onClick={closeMenu} >
            Home
          </MenuLink>
          <MenuLink activeStyle={style} exact to="/projects" onClick={closeMenu}>
            Projects
          </MenuLink>
          <MenuLink activeStyle={style} exact to="/tutorials" onClick={closeMenu}>
            Tutorials
          </MenuLink>
          <MenuLink activeStyle={style} exact to="/about" onClick={closeMenu}>
            About
          </MenuLink>
          <MenuLink activeStyle={style} exact to="/contact" onClick={closeMenu}>
            Contact
          </MenuLink>
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.div`
  box-sizing: border-box; 
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  //width: 100%
  //background: #262626; css-tricks color navbar
  background: #111827;
  /* background: linear-gradient(
    45deg,
    #003153,
    #003153 50%,
    #000000 50%,
    #000000
  );
  background-size: vh 1rem; */
  /* background-image: linear-gradient(black, black 50%, pink 50%, pink);
  background-repeat: no-repeat;
  background-size: 100% 5px;
  background-position: 0 center; */

  //height: 0;
  overflow: visible;
  //box-shadow: rgb(0 0 0 / 20%) 0px -7px 25px 2px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  //box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.28), 0 1px 10px 0 rgba(0, 0, 0, 0.24), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
`;

const Nav = styled.div`
  //padding: 0.5rem 1rem;
  //padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //background: white;
  max-width: 80rem;
  margin: auto;

  //box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  //box-shadow: rgb(0 0 0 / 20%) 0px -7px 25px 2px;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 1.2rem 0rem;
  width: 6rem;
  //height: 100%;
  //padding: 0rem 2rem 0rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #f6f7f8;
  //transition: all 0.2s ease-in;
  transition: background 0.1s ease-in;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    &:hover {
      box-shadow: 0 3px 0 0 #0096ff;
    }
  }

  &:hover {
    //box-shadow: 0 5px 0px 0px black;
    //color: #0096ff;
    //transform: translateY(-4px);
    //text-shadow: .25pxff 0px .1px, -.25px 0px .1px;
    //mix-blend-mode: difference;
    //background-color:#004e85;
    //border-bottom: 1px solid #000;
    //border-bottom-color: #ffffff;
    //border-bottom-width: medium;
    // text-decoration: underline;
    // text-decoration-thickness: 5px;
    //border: line;
  }

  &:last-child {
   // padding-right: 30rem;
  }


`;

const Menu = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? '16.7rem' : '0')};
    transition: max-height 0.2s ease-out;
  }
`;

const Logo = styled.div`
  //padding: 1rem 0 1rem 5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  color: #f6f7f8;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  span {
    font-weight: 300;
    color: #f6f7f8;
    //font-size: 1.3rem;
  }
`;

export default Navbar;
