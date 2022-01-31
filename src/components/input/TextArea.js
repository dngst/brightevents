import styled from "styled-components";

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #81523F;;
  height: 6rem;
  width: 100%;
  margin: 0 0 1em;
  text-transform: capitalize;
  box-sizing: border-box;
  overflow: auto;
  resize: none;
  ::placeholder {
    color: #81523F;;
  }
  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`

export default TextArea;
