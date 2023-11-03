import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import Modal from "react-modal";
import "./index.css";
import App from "./App";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
 <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthProvider>
);
