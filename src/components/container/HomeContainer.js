import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  line-height: 3.5rem;
  h1 {
    font-size: 3.5rem;
    color: #ffffff;
    margin: 19% 0 1%;
  }
  button {
    width: inherit;
  }
  @media (max-width: 768px) {
    line-height: 5rem;
    h1 {
      margin: 60% 0 0;
      font-size: 3.3rem;
    }
  }
`
export default HomeContainer;
