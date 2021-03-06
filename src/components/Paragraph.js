import styled from "styled-components";

const Paragraph = styled.p`
  text-transform: ${(props) => (props.capitalize ? "capitalize" : "none")};
  line-height: 1.5;
  text-align: ${(props) => (props.justify ? "justify" : "inherit")};
  word-break: ${(props) => (props.break ? "break-all" : "normal")};
`;
export default Paragraph;
