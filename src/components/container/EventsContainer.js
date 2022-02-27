import styled from "styled-components";
import Container from "./Container";

const EventsContainer = styled(Container)`
  line-height: 1.5;
  width: 35%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
  @media (max-width: 820px) {
    width: 75%;
  }
  @media (max-width: 1024px) {
    width: 75%;
  }
`;

export default EventsContainer;
