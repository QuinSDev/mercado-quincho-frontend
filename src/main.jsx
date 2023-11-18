import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import Modal from "react-modal";
import { QuinchoProvider } from "./components/QuinchoProvider";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuinchoProvider>
      <App />
    </QuinchoProvider>
  </React.StrictMode>
);
