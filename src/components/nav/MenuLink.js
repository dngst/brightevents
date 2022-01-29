import styled from "styled-components";

const MenuLink = styled.a`
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
    text-decoration-color: #f78f1e;
  }
`;

export default MenuLink;
