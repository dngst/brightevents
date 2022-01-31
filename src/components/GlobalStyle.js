import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  	font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.0625em;
  }

  a {
    text-decoration: none;
    color: #345995;
  }

  body::-webkit-scrollbar {
    width: 0.35em;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #345995;
    &:hover {
      background-color: #CA1551;
    }
  }
`
export default GlobalStyle;
