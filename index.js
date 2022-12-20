// DELETE ALL OTHER CODE FROM THE INDEX.JS FILE AND PASTE THE CODE BELOW
import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
