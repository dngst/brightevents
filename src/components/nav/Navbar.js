import React, { useState } from "react";
import Nav from "./Nav";
import Index from "./Index";
import Menu from "./Menu";
import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";
import Logo from "./logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Index href="/">
        <img src={Logo} alt="Home" />
      </Index>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/about">about</MenuLink>
        <MenuLink href="/events">browse events</MenuLink>
        <MenuLink href="/login">login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
