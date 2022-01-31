import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  width: ${props => props.bg? "60%" : "30%"};
  margin: ${props => props.primary? "5% auto": "7% auto"};
  @media (max-width: 768px) {
    width: 85%;
    margin-top: 25%;
  }
   @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }
   }
`
export default Container;
