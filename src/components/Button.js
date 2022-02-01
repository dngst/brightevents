import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? "#ffffff" : "#f78f1e")};
  background-color: ${(props) => (props.primary ? "#f78f1e" : "#ffffff")};
  border: 1px solid #f78f1e;
  border-radius: 0;
  margin: auto;
  padding: 0.7em 2em;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width: ${(props) => (props.max ? "max-content" : "100%")};
`;

export default Button;
