import styled from "styled-components";
import Container from "./Container";

const AboutContainer = styled(Container)`
  @media (max-width: 768px) {
    p {
      text-align: justify;
    }
  }
`;
export default AboutContainer;
