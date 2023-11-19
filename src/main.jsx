import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import Modal from "react-modal";
import { QuinchoProviderDetails } from './provider/QuinchoProviderDetails';

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuinchoProviderDetails>
    <App />
    </QuinchoProviderDetails>
  </React.StrictMode>,
)
