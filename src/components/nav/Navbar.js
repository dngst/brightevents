import React, { useState } from "react";
import { Link } from "wouter";
import Nav from "./Nav";
import Index from "./Index";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Logo from "./logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Index>
        <Link to="/"><img src={Logo} alt="Home" /></Link>
      </Index>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/about">about</Link>
        <Link href="/events">browse events</Link>
        <Link href="/login">login</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
