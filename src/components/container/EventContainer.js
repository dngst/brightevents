import styled from "styled-components"
import Container from "./Container";

const EventContainer = styled(Container)`
  padding: 1%;
  .event-details {
    text-align: center;
  }
  .event-btns {
    button {
      margin: 1% auto;
    }
  }
  @media (max-width: 480px) {
    width: 85%;
    padding: 4.5%;
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export default EventContainer;
