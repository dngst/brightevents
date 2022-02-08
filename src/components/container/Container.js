import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 7% auto;
  padding: 1% 0;
  width: ${(props) => (props.md ? "30%" : "55%")};
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 25%;
    p {
      font-size: 0.9rem;
    }
  }
`;
export default Container;
