import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: 'text'
}))`
  border-radius: 3px;
  border: 1px solid #f78f1e;
  display: block;
  padding: 0.5rem;
  width: 20rem;
  margin: 0 0 1em;
  text-transform: capitalize;
  border-radius: 0;
  ::placeholder {
    color: #f78f1e;
  }
`

export default Input;
