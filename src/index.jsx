import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ProductsProvider } from "./contexts/products.context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/Cart.context";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <ProductsProvider>
            <CartProvider>
              <GlobalStyles />
              <App />
            </CartProvider>
          </ProductsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
