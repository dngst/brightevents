import styled from "styled-components";

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.brown};
  height: 6rem;
  width: 100%;
  margin: 0 0 1em;
  text-transform: capitalize;
  box-sizing: border-box;
  overflow: auto;
  resize: none;
  ::placeholder {
    color: ${(props) => props.theme.brown};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
`;

export default TextArea;
