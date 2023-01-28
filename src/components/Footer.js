import styled from "styled-components";
import { Link } from "wouter";

const AppFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.link};
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
    display: block;
  }
`;

const AppName = styled.p`
  color: ${(props) => props.theme.white};
  cursor: pointer;
  &:nth-child(3) {
    cursor: auto;
  }

  @media (max-width: 768px) {
    margin: 2% 2%;
  }
`;

const Footer = () => {
  return (
    <AppFooter>
      <Link href="/socials"><AppName>socials.</AppName></Link>
      <Link href="/bizstuff"><AppName>biz stuff.</AppName></Link>
      <AppName>&copy; {(new Date().getFullYear())} Bright Events</AppName>
    </AppFooter>
  );
};

export default Footer;