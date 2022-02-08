import styled from "styled-components";

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

export default Menu;
