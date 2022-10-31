import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  	font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.0625em;
    display:flex;
    flex-direction:column;
    margin: 0;
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

  .event-row {
    display: flex;
    justify-content: space-between;
    p {
      text-transform: uppercase;
        &:nth-child(1) {
          font-weight: 900;
      }
      &:nth-child(2) {
          text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      display: block;
      text-align: left;
      margin-bottom: 13%;
    }
  }

  main {
    position: relative;
    min-height: 100vh;
  }

  #root {
    @media (max-width: 768px) {
      margin-bottom: 10%;
    }
  }

`;

export default GlobalStyle;
