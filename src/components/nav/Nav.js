import styled from "styled-components";

const Nav = styled.div`
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

export default Nav;
