import styled from "styled-components";

const Sticky = styled.div`
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255, 0.87);
  h1 {
    padding-top: 3%;
  }
  @media (max-width: 768px) {
    h1 {
      top: 2%;
      position: sticky;
    }
  }
`
export default Sticky;
