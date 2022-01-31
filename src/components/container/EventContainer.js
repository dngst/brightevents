import styled from "styled-components"
import Container from "./Container";

const EventContainer = styled(Container)`
  border: 10px outset #C1DBE3;
  padding: 2%;
  p {
    text-align: justify;
    word-break: break-all;
  }
  hr {
    border-color: #CA1551;
    width: 8rem;
  }
  @media (max-width: 480px) {
    padding: 4.5%;
  }
`;

export default EventContainer;
