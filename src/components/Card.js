import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  text-align: left;
  margin-bottom: 7%;

  p {
    font-size: 1rem;
    line-height: 1.2;
  }

  .event-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: sans-serif;

    a {
      color: ${(props) => props.theme.grey};
      text-decoration: underline;
    }

    span {
      color: ${(props) => props.theme.highlight};
      font-weight: bold;
    }
  }

  .event-cat {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    .event-title {
      span {
        display: none;
      }
    }
  }
`;

export default Card;
