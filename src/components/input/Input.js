import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: 'text'
}))`
  border: 1px solid #f78f1e;
  display: block;
  height: 2rem;
  width: 100%;
  margin: 0 0 1em;
  text-transform: capitalize;
  border-radius: 0;
  box-sizing: border-box;
  ::placeholder {
    color: #f78f1e;
  }
  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`

export default Input;
