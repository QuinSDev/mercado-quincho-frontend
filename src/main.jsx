import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import Modal from "react-modal";
import { QuinchoProvider } from "./components/QuinchoProvider";
import { UserProvider } from "./components/UserProvider";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuinchoProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </QuinchoProvider>
  </React.StrictMode>
);
