import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.transparent ? props.theme.white : props.theme.brown)};
  display: block;
  height: 2rem;
  width: 100%;
  margin: 0 0 1em;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
  transition: border-color 0.5s ease-in;
`;

export const PasswordInput = styled(Input).attrs({
  type: "password",
})``;

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.brown};
  height: 4rem;
  width: 100%;
  margin: 0 0 1em;
  font-size: 0.8rem;
  box-sizing: border-box;
  overflow: auto;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.white};
  }
`;

export const TimePicker = styled(Input).attrs({
  type: "time",
})``;

export const DatePicker = styled(Input).attrs({
  type: "date",
})``;

export const EmailInput = styled(Input).attrs({
  type: "email",
})``;

export default Input;
