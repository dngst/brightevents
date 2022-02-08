import styled from "styled-components";
import Container from "./Container";

const AboutContainer = styled(Container)`
  @media (max-width: 480px) {
    width: 100% !important;
    p {
      text-align: justify;
    }
  }
  @media (max-width: 820px) {
    margin-top: 15%;
    width: 85%;
  }
  @media (max-width: 1024px) {
    margin-top: 15%;
    width: 85%;
  }
`;
export default AboutContainer;
