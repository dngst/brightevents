import styled from "styled-components";

const Paragraph = styled.p`
  text-transform: ${props => props.capitalize? "capitalize" : "none"};
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: ${props => props.justify? "justify": "inherit"};
  word-break: break-all;
`
export default Paragraph;
