import styled from "styled-components"
import Container from "./Container";

const EventContainer = styled(Container)`
  border: 10px outset #f78f1e;
  padding: 2%;
  p {
    text-align: justify;
    word-break: break-all;
  }
  hr {
    border-color: #f78f1e;
    width: 8rem;
  }
`;

export default EventContainer;
