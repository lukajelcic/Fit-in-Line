import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";


import BurgerMenu from "./Burgermenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <Brand />
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <li><Link to="/about">O Nama</Link></li>
            <li><Link to="/nutrition">Ishrana</Link></li>
            <li><Link to="/training">Treninzi</Link></li>
            <li><Link to="/news">Vesti</Link></li>
            <li><Link to="/gallery">Galerija</Link></li>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
        <div className="social">
          <a href="https://www.instagram.com/fit_inline/?hl=sr" className="fa fa-instagram"> </a>
          <a href="https://www.facebook.com/fit.inline.1" className="fa fa-facebook"> </a>
        </div>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: relative;
  display:flex;
  width: 100%;
  top: 0;
  left: 0;
  background:rgb(9, 83, 88);
  z-index: 1;
  font-size: 1.2rem;
  padding:20px;
`;

const FlexContainer = styled.div`
  margin: auto;
  padding: 0 2rem;
  display:flex;
  `;

const NavLinks = styled(animated.ul)`
  list-style-type: none;
  margin: auto 0;
  display:flex;
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;