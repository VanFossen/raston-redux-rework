import React from "react";
import ReactDOM from "react-dom/client";

// component
import App from "./App";

// redux store
import { store } from "./redux/store";
import { Provider } from "react-redux";

// style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
