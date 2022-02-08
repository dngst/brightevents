import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? props.theme.white : props.theme.base)};
  background-color: ${(props) =>
    props.primary ? props.theme.base : props.theme.white};
  border: 1px solid ${(props) => props.theme.base};
  border-radius: 0;
  margin: auto;
  padding: 0.7em 2em;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width: ${(props) => (props.max ? "max-content" : "100%")};
  letter-spacing: inherit;
`;

export default Button;
