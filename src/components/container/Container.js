import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 4% auto;
  padding: 1% 0;
  width: ${(props) => (props.md ? "30%" : "55%")};
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
