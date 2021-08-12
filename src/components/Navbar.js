import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoSunny, IoMoon } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';

const color1 = '#5D576B';
const color2 = '#ED6A5A';

const Navbar = ({ isOpen, setIsOpen, theme, setTheme, scroll, location }) => {

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log(theme);
  }

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
  

  //const style = { color: theme.logo} ;
  //fontWeight: 'bold'};
  // ref={node} was the crucial thing I forgot, don't know what it means
  return (
    <Parent ref={node} scroll={scroll} location={location}>
      <Nav>
        {/* <button onClick={() => themeToggler()}>theme</button> */}
        
        <Logo scroll={scroll} location={location}>
          kant<span>.dev</span>
          {/* <img src={require('../images/logo.svg')} alt="Logo" /> */}
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen) } scroll={scroll}
            location={location}>
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
          {/* <MenuLink activeStyle={style} exact to="/tutorials" onClick={closeMenu}>
            Tutorials
          </MenuLink> */}
          <MenuLink exact to="/about" onClick={closeMenu} scroll={scroll} path={location}>
            About
          </MenuLink>
          {/* <MenuLink activeStyle={style} exact to="/contact" onClick={closeMenu}>
            Contact
          </MenuLink> */}
          {theme === 'light' ?
          <IoMoon size="1.5rem" className="icon"  onClick={() => themeToggler()} />
        : <IoSunny size="1.5rem" className="icon" onClick={() => themeToggler()} />}
        {/* <IoMoon size="1.5rem" className="icon" onClick={() => themeToggler()} /> */}
        </Menu>
        
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  
  transition: background-color 0.5s, box-shadow 0.5s;
  .icon {
    //transition: color 0.5s;
     // background: ${(props) => props.theme.sunMoon};
   // padding: 0.2rem;
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1rem; //0.8rem
    transition: color 0.5s;
    
    color: ${(props) => (props.scroll && props.location ? props.theme.sunMoon : props.theme.sunMoonScroll)};
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
  //width: 100%
  //background: #262626; css-tricks color navbar
  
  background: ${(props) => (props.scroll && props.location ? props.theme.navbar : props.theme.navbarStart)}; //111827
  
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
  //transition: box-shadow 0.5s;
  box-shadow:  ${(props) => (props.scroll && props.location ? "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)" : "0")};
  //box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  //box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.28), 0 1px 10px 0 rgba(0, 0, 0, 0.24), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
`;

const Nav = styled.div`
  //padding: 0.5rem 1rem;
  //padding: 0 1rem;
  height: 3.5rem;
  //height: 5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //background: white;
  max-width: 60rem;
  margin: auto;

  //box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  //box-shadow: rgb(0 0 0 / 20%) 0px -7px 25px 2px;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 5px;
  &:active, &:hover {
      span {
        background: ${(props) => props.theme.hamburgerHover};
      }
    }

  span {
    height: 3px;
    width: 28px;
    transition: background-color 0.5s;
    background: ${(props) => (props.scroll && props.location ? props.theme.hamburgerStart : props.theme.hamburger)};
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
  //height: 100%;
  //padding: 0rem 2rem 0rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) => (props.scroll && props.path ? props.theme.menuLink : props.theme.menuLinkScroll)};
  &.active {
    color: ${(props) => props.theme.menuLinkActive};
  }
  font-weight: 600;
  //transition: all 0.2s ease-in;
  //transition: background 0.1s ease-in;
  font-size: 1rem;

  @media (max-width: 40rem) {
    width: 100%;
  }

  @media (min-width: 40rem) {
    /* &:hover {
      box-shadow: 0 3px 0 0 #111827;
    } */
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
    transition:transform 0.5s cubic-bezier(.23,1,.32,1);
  }
  
  &::before {
    transform-origin: 50% 0;
  }
 
  &:hover {
    &::before {
      transform:scaleX(100%);
      transform-origin: 50% 0;
    }
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

  &:nth-last-child(2) {

    @media (max-width: 66rem) {
      margin-right: 3.5rem;
    }
    /* @media (max-width: 65rem) {
      margin-right: 2rem;
    } */
/*     
    @media (max-width: 65rem) {
      margin-right: 1rem;
    }

    @media (max-width: 64rem) {
      margin-right: 2rem;
    }

    @media (max-width: 63rem) {
      margin-right: 3rem;
    } */


    /* @media (min-width: 62rem) and (max-width: 63rem) {
      margin-right: 2rem;
    }

    @media (max-width: 61rem) and (min-width: 62rem){
      margin-right: 1rem;
    } */

    @media (max-width: 40rem) {
      margin-right: auto;
      border-bottom: solid 0.5rem ${(props) => props.theme.menuLinkActive};
    }
    // padding-right: 30rem;
  }
`;

const Menu = styled.div`
//border: solid ${(props) => props.theme.text} 0.2rem;
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

const Logo = styled.div`
  /* img {
    display: block;
    height: 2rem;
    padding: 0;
    margin: 0;
    margin-left: 2rem;
    @media (max-width: 40rem) {
      margin-left: 1.5rem;
  }
}*/
    //margin-left: 1.5rem;
  //padding: 1rem 0 1rem 5rem;
  //font-family: 'Roboto', sans-serif;
  //margin-left: 0.5rem;
  //border: solid ${(props) => (props.scroll && props.location ? props.theme.logoScroll : props.theme.logo)};
  //border-radius: 0.5rem;
  //padding: 0 0.5rem;

  //padding: 0.5rem 0 0.5rem 2rem;
  margin-left: 2rem;
  @media (max-width: 40rem) {
    //padding: 0.5rem 0 0.5rem 1.5rem;
    margin-left: 1.5rem;
  }
  transition: color 0.5s;
  color: ${(props) => (props.scroll && props.location ? props.theme.logoScroll : props.theme.logo)};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  span {
    //border: solid ${(props) => (props.scroll && props.location ? props.theme.logoScroll : props.theme.logo)};
    //font-family: 'Roboto', sans-serif;
    font-weight: 800;
    transition: color 0.5s;
    color: ${(props) => (props.scroll && props.location ? props.theme.logoSpanScroll : props.theme.logoSpan)}; //#f6f7f8
    //font-size: 1.3rem;
  }
`;

export default Navbar;
