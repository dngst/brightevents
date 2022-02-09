import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  	font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.0625em;
    transition: all 0.5s ease;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.link};
  }

  body::-webkit-scrollbar {
    width: 0.35em;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.link};
    &:hover {
      background-color: ${(props) => props.theme.highlight};
    }
  }
`;

export default GlobalStyle;
