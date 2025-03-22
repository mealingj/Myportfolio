import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>Jaylen's Portfolio</Logo>
      <NavLinks>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #006400;
  color: white;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
  }
  a:hover {
    text-decoration: underline;
  }
`;