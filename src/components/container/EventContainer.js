import styled from "styled-components";
import Container from "./Container";

const EventContainer = styled(Container)`
  h1 {
    text-align: justify;
    word-break: break-all;
  }
  .event-loc {
    color: #ca1551;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
  }
  .event-cat {
    margin: 8% 0;
  }
  .event-desc {
    margin: 4% 0;
  }
  .event-details {
    text-align: left;
    color: #81523f;
    span {
      color: #808080;
    }
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
    .event-desc {
      margin: 8% 0;
    }
  }
`;

export default EventContainer;
