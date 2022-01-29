import styled from "styled-components";

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f78f1e;
    margin-bottom: 4px;
    border-radius: 0;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Hamburger;
