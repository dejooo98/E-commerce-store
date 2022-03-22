import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ProductProvider} from "./Context/products";
import { CartProvider } from "./Context/cart";


ReactDOM.render(
  <React.StrictMode>
      <ProductProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
