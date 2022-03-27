import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  	font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.0625em;
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
        &:nth-child(4) {
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      display: block;
      text-align: left;
      margin-bottom: 13%;
    }
  }

  .center {
    text-align: center;
  }
`;

export default GlobalStyle;
