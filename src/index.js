import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShoppingcartContext from "./context/ShoppingcartContext";

ReactDOM.render(
  <BrowserRouter>
    <ShoppingcartContext>
      <App />
    </ShoppingcartContext>
  </BrowserRouter>,
  document.getElementById("root")
);
