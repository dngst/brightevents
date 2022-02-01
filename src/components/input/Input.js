import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: none;
  border-bottom: 1px solid #81523f;
  display: block;
  height: 2rem;
  width: 100%;
  margin: 0 0 1em;
  text-transform: capitalize;
  box-sizing: border-box;
  ::placeholder {
    color: #81523f;
  }
  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

export default Input;
