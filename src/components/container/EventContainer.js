import styled from "styled-components";
import Container from "./Container";

const EventContainer = styled(Container)`
  h1 {
    text-align: justify;
    word-break: break-all;
  }

  .event-loc {
    color: ${(props) => props.theme.highlight};
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
  }

  .event-cat {
    margin: 6% 0;
  }

  .event-desc {
    margin: 2% 0;
  }

  .event-details {
    text-align: left;
    color: ${(props) => props.theme.brown};
  }

  .event-btns {
    text-align: left;
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
        margin: 1.5% auto;
        width: 100%;
      }

      .update-btn {
        border: 1px solid ${(props) => props.theme.link};
      }
    }
    width: 100% !important;
  }

  @media (max-width: 820px) {
    width: 75%;
  }

  @media (max-width: 1024px) {
    width: 75%;
  }
`;

export default EventContainer;
