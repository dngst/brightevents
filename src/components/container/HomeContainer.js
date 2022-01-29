import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  line-height: 3.5rem;
  a {
    border-color: #ffffff;
  }
  h1 {
    font-size: 3.7rem;
    color: #ffffff;
    margin: 19% 0 1%;
  }
  @media (max-width: 480px) {
    line-height: 5rem;
    h1 {
      margin: 60% 0 0;
    }
  }
`
export default HomeContainer;
