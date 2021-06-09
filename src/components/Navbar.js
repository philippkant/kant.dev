import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
          <MenuLink to="/" onClick={closeMenu}>
            Home
          </MenuLink>
          <MenuLink to="/projects" onClick={closeMenu}>
            Projects
          </MenuLink>
          <MenuLink to="/notes" onClick={closeMenu}>
            Notes
          </MenuLink>
          <MenuLink to="/about" onClick={closeMenu}>
            About
          </MenuLink>
          <MenuLink to="/contact" onClick={closeMenu}>
            Contact
          </MenuLink>
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  //width: 100%
  background: #003153;
  //height: 0;
  overflow: visible;
  //box-shadow: rgb(0 0 0 / 20%) 0px -7px 25px 2px;
  //box-shadow: inset 0 -2px 5px rgb(0 0 0 / 33%)
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.div`
  //padding: 0.5rem 1rem;
  padding: 0 2rem;
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
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  //padding: 0rem 2rem 0rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.2s ease-in;
  font-size: 1rem;

  &:hover {
    //color: #d5e5f5;
    //transform: translateY(-4px);
    //text-shadow: .25px 0px .1px, -.25px 0px .1px;
    
    background: #001b2e;
    // text-decoration: underline;
    // text-decoration-thickness: 5px;
    border: line;
  }

  &:focus {
    color: #ff0000;
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
    max-height: ${(props) => (props.isOpen ? '245px' : '0')};
    transition: max-height 0.2s ease-out;
  }
`;

const Logo = styled.div`
  //padding: 1rem 0 1rem 5rem;
  padding: 0.5rem 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  span {
    font-weight: 300;
    //font-size: 1.3rem;
  }
`;

export default Navbar;
