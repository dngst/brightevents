import styled from "styled-components";

const Sticky = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  @media (max-width: 480px) {
    h1 {
      top: 2%;
      position: sticky;
    }
  }
`
export default Sticky;
