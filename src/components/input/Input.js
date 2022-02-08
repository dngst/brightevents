import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.brown};
  display: block;
  height: 2rem;
  width: 100%;
  margin: 0 0 1em;
  text-transform: capitalize;
  box-sizing: border-box;
  ::placeholder {
    color: ${(props) => props.theme.brown};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
`;

export default Input;
