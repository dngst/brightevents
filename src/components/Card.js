import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  margin: 0 0 4%;
  border: 3px dashed #c1dbe3;
  text-align: left;
  padding: 0 4%;
  p {
    font-size: 1rem;
    line-height: 1.2;
  }
  .card-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    a {
      color: #000000;
      text-decoration: underline;
    }
    span {
      color: #ca1551;
      font-weight: bold;
    }
  }
  .event-cat {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export default Card;
