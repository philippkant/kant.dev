import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoSunny, IoMoon } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen, theme, setTheme, scroll, location }) => {
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    //console.log(node.current);
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

  return (
    <Parent ref={node} scroll={scroll} location={location}>
      <Nav>
        <Logo scroll={scroll} location={location} exact to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg8"
            version="1.1"
            viewBox="0 0 115.06823 114.86882"
            height="2.5rem"
            width="2.5rem"
          >
            <defs id="defs2" />
            <metadata id="metadata5">
              <rdfRDF>
                <ccWork rdfAbout="">
                  <dcFormat>image/svg+xml</dcFormat>
                  <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage" />
                  <dcTitle></dcTitle>
                </ccWork>
              </rdfRDF>
            </metadata>
            <g transform="translate(-25.18937,-41.786977)" id="layer1">
              <path id="path993" d="M 30.936333,41.817115 V 118.62371" />
              <path id="path995" d="M 48.190037,41.786977 V 118.59185" />
              <path id="path999" d="M 65.423065,80.097364 V 118.59918" />
              <path id="path1001" d="M 82.669162,41.889691 V 118.49754" />
              <path id="path1003" d="m 99.938806,80.1203 v 38.30366" />
              <path id="path1005" d="M 117.21916,80.071427 V 156.63238" />
              <path id="path1007" d="M 134.51064,80.047936 V 156.6558" />
            </g>
          </svg>
        </Logo>
        <Hamburger
          onClick={() => setIsOpen(!isOpen)}
          scroll={scroll}
          location={location}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink
            exact
            to="/"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Home
          </MenuLink>
          <MenuLink
            exact
            to="/projects"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Projects
          </MenuLink>
          <MenuLink
            exact
            to="/about"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            About
          </MenuLink>
          {theme === 'light' ? (
            <IoMoon
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          ) : (
            <IoSunny
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          )}
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  transition: background-color 0.5s, box-shadow 0.5s;
  .icon {
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    transition: color 0.5s;

    color: ${(props) =>
      props.scroll && props.location
        ? props.theme.sunMoon
        : props.theme.sunMoonScroll};
    &:hover {
      color: ${(props) => props.theme.sunMoonHover};
    }
    @media (max-width: 40rem) {
      right: 5rem;
    }
  }

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${(props) =>
    props.scroll && props.location
      ? props.theme.navbar
      : props.theme.navbarStart};
  overflow: visible;
  box-shadow: ${(props) =>
    props.scroll && props.location
      ? '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
      : '0'};
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
  margin: auto;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  //cursor: pointer;
  margin-top: 5px;
  &:active,
  &:hover {
    span {
      background: ${(props) => props.theme.hamburgerHover};
    }
  }

  span {
    height: 3px;
    width: 28px;
    transition: background-color 0.5s;
    background: ${(props) =>
      props.scroll && props.location
        ? props.theme.hamburgerStart
        : props.theme.hamburger};
    margin-bottom: 5px;
    border-radius: 2px;
    margin-right: 1.5rem;
  }

  @media (max-width: 40rem) {
    display: flex;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 1.1rem 0rem;
  width: 6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) =>
    props.scroll && props.path
      ? props.theme.menuLink
      : props.theme.menuLinkScroll};
  &.active {
    color: ${(props) => props.theme.menuLinkActive};
  }
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 40rem) {
    width: 100%;
  }

  @media (min-width: 40rem) {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.menuLinkUnderline};
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  &:nth-last-child(2) {
    @media (max-width: 66rem) {
      margin-right: 3.5rem;
    }

    @media (max-width: 40rem) {
      margin-right: auto;
      //box-sizing: content-box;
      border-bottom: solid 0.5rem ${(props) => props.theme.menuLinkActive};
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 40rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? '11rem' : '0')};
    transition: max-height 0.2s ease-out;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  fill: none;
  stroke: ${(props) =>
    props.scroll && props.location ? props.theme.logoScroll : props.theme.logo};
  transition: stroke 0.5s;
  stroke-width: 11.49392605;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
  margin-left: 1.5rem;
  &:hover,
  &:active {
    stroke: ${(props) => props.theme.menuLinkActive};
  }
  @media (max-width: 40rem) {
    margin-left: 1rem;
  }
  padding: 0.5rem;

  /* .kantdev {
    transition: color 0.5s;
    color: ${(props) =>
      props.scroll && props.location
        ? props.theme.logoScroll
        : props.theme.logo};
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;

    span {
      font-weight: 800;
      transition: color 0.5s;
      color: ${(props) =>
        props.scroll && props.location
          ? props.theme.logoSpanScroll
          : props.theme.logoSpan};
    }
  } */
`;

export default Navbar;
