import styled from "styled-components"
import Container from "./Container";

const EventContainer = styled(Container)`
  border: 10px outset #C1DBE3;
  padding: 2%;
  hr {
    border-color: #CA1551;
    width: 8rem;
  }
  .card-footer{
    text-align: center;
  }
  @media (max-width: 480px) {
    padding: 4.5%;
  }
`;

export default EventContainer;
