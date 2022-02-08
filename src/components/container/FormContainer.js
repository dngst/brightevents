import styled from "styled-components";
import Container from "./Container";

const FormContainer = styled(Container)`
  @media (max-width: 480px) {
    width: 100% !important;
  }
  @media (max-width: 820px) {
    width: 55%;
  }
  @media (max-width: 1024px) {
    width: 55%;
  }
`;
export default FormContainer;
