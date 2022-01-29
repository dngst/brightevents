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
    margin: 15% 0 1%;
  }
  @media (max-width: 480px) {
    h1 {
      margin: 60% 0 0;
    }
  }
`
export default HomeContainer;
