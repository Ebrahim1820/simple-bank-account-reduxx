import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";

// To caonnect react with redux should use this package
/// 'npm i react-redux'
// then react and redux can talk to each other

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // this provider has been used to connect react with redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
