import styled from "styled-components";
import Container from "./Container";

const EventContainer = styled(Container)`
  .event-details {
    text-align: center;
    color: #81523f;
  }
  .event-btns {
    button {
      width: inherit;
    }
    .update-btn {
      border-left: none;
      border-right: none;
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
      .update-btn {
        border: 1px solid #f78f1e;
      }
    }
    .event-details {
      line-height: 2rem;
    }
    .event-desc {
      padding: 3% 0;
    }
  }
`;

export default EventContainer;
