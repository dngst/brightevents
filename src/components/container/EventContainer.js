import styled from "styled-components";
import Container from "./Container";

const EventContainer = styled(Container)`
  .event-details {
    text-align: center;
  }
  .event-btns {
    button {
      width: inherit;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
    .event-btns {
      button {
        margin: 1.2% auto;
        width: 100%;
      }
    }
  }
`;

export default EventContainer;
