import styled from "styled-components";

const Title = styled.h1`
  text-transform: capitalize;
  font-size: ${props => props.fsize };
  color: ${props => props.color };
  padding: ${props => props.padding };
  margin: ${props => props.margin };
` 
export default Title;
