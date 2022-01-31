import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  margin: 0 0 4%;
  border: 3px dashed #C1DBE3;
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
      color: #81523F;
      text-decoration: underline;
    }
    span {
      color: #CA1551;
    }
    @media (max-width: 480px) {
      span {
        display: none;
      }
    }
  }
`

export default Card;
