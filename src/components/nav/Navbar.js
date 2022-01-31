import React, { useState } from "react";
import Nav from "./Nav";
import ActiveLink from "./ActiveLink";
import Index from "./Index";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Logo from "./logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Index>
        <ActiveLink href="/"><img src={Logo} alt="Home" /></ActiveLink>
      </Index>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <ActiveLink href="/about">about</ActiveLink>
        <ActiveLink href="/events">browse events</ActiveLink>
        <ActiveLink href="/new">create event</ActiveLink>
        <ActiveLink href="/login">login</ActiveLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
