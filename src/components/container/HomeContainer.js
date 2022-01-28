import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  background:  linear-gradient(rgb(247, 143, 30), rgba(0, 0, 0, 0.8)),
  url(https://images.pexels.com/photos/2361102/pexels-photo-2361102.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  line-height: 3.5rem;
  h1 {
    font-size: 3rem;
    color: #ffffff;
    margin: 15% 0 1%;
  }
  @media (max-width: 480px) {
    line-height: 3.5rem;
  }
`
export default HomeContainer;
