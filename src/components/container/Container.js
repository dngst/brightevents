import styled from "styled-components";

const Container = styled.div`
  text-align: ${(props) => (props.left ? "left" : "center")};
  margin: 4% auto;
  padding: 1% 0;
  width: ${(props) => (props.md ? "30%" : "55%")};

  button {
    width: ${(props) => (props.md ? "100%" : "max-content")};
  }

  @media (max-width: 768px) {
    padding: 10% 0;
    width: 95%;
    margin-top: 10%;
    p {
      font-size: 0.9rem;
    }
  }
`;
export default Container;
