import { useState } from "react";
import { Link, useRoute } from "wouter";
import styled from "styled-components";
import Icon from "./icon.png";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${(props) => props.theme.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .active {
    text-underline-position: under;
    text-decoration: underline;
    text-underline-offset: 0.5em;
    text-decoration-color: ${(props) => props.theme.base};
  }
  @media (max-width: 768px) {
    border-bottom: 1px solid ${(props) => props.theme.navBorder};
  }
`;

const Logo = styled.span`
  padding: 1rem 0;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    &:hover {
      transform: rotateZ(360deg);
      transition: 0.5s ease;
    }
  }
`;

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""} href={isActive}>
        {props.children}
      </a>
    </Link>
  );
};

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${(props) => props.theme.base};
    margin-bottom: 4px;
    border-radius: 0;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: right;
    text-transform: capitalize;
    color: #000000;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    &:hover {
      text-underline-position: under;
      text-decoration: underline;
      text-underline-offset: 0.5em;
      text-decoration-color: ${(props) => props.theme.base};
    }
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

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
