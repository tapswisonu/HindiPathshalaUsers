// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store"; // adjust path to your store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        {/* ✅ Router context wrapper */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
