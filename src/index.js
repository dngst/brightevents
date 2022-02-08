import React from "react";
import ReactDOM from "react-dom";
import { Router } from "wouter";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import colors from "colors";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={colors}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
