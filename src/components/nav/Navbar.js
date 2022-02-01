import React, { useState } from "react";
import Nav from "./Nav";
import ActiveLink from "./ActiveLink";
import Logo from "./Logo";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Icon from "./icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <ActiveLink href="/">
          <img src={Icon} alt="Home" />
        </ActiveLink>
      </Logo>
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
