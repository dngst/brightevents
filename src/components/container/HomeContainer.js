import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  line-height: 3.5rem;
  h1 {
    font-size: 3.5rem;
    color: ${(props) => props.theme.white};
    margin: 19% 0 1%;
  }
  button {
    background-color: inherit;
    color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.white};
  }
  @media (max-width: 768px) {
    line-height: 5rem;
    h1 {
      margin: 60% 0 0;
      font-size: 3.3rem;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 58%;
  }
`;
export default HomeContainer;
