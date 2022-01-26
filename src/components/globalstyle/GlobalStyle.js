import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  	font-family: 'Quicksand', sans-serif;
  }

  a {
    text-decoration: none;
    color: #f78f1e;
  }

  .center {
    text-align: center;
  }

  .home {
    background:  linear-gradient(rgb(247, 143, 30), rgba(0, 0, 0, 0.8)),
    url(https://images.pexels.com/photos/2361102/pexels-photo-2361102.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    margin: -0.6% -0.6% -1%;
  }

  .home h1 {
    color: #ffffff;
    margin:auto;
    padding: 15% 0 2.5% ;
    font-size: 3rem;
  }
`
export default GlobalStyle;
