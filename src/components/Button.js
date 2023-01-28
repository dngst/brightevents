import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? props.theme.white : props.theme.link)};
  background-color: ${(props) =>
    props.primary ? props.theme.link : props.theme.white};
  border: 1px solid ${(props) => props.theme.link};
  border-radius: 0;
  padding: 0.7em 2em;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width: max-content;
  letter-spacing: inherit;
  margin: 1% auto;

  &:hover {
    background-color: ${(props) =>
    props.primary ? props.theme.white : props.theme.link};
    color: ${(props) =>
    props.primary ? props.theme.link : props.theme.white};
    border-color: ${(props) => props.theme.link};
  }
  transition: background-color 0.5s ease-in, color 0.5s ease-in, border-color 0.4s ease-in;
`;

export default Button;
