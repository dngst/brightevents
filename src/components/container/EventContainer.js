import styled from "styled-components"
import Container from "./Container";

const EventContainer = styled(Container)`
  border: 10px outset #C1DBE3;
  padding: 1%;
  hr {
    border-color: #CA1551;
    width: 8rem;
  }
  .card-footer{
    text-align: center;
  }
  .event-btns {
    button {
      margin: 1% auto;
    }
  }
  @media (max-width: 480px) {
    padding: 4.5%;
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export default EventContainer;
