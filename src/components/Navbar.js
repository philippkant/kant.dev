import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Navbar = ({isOpen, setIsOpen}) => {



  return (
    <Parent>
      <Nav>
        <Logo href="">
          Philipp<span> Kant</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </MenuLink>
          <MenuLink to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </MenuLink>
          <MenuLink to="/notes" onClick={() => setIsOpen(!isOpen)}>
            Notes
          </MenuLink>
          <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </MenuLink>
          <MenuLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </MenuLink>
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  width: 100%;
  height: 0;
  overflow: visible;
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #000000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled(Link)`

  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #ff0000;
    // text-decoration: underline;
    // text-decoration-thickness: 5px;
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
  padding: 1rem 0;
  color: #ff0000;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default Navbar;
