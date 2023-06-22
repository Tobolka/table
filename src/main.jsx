import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="layout">
      <div className="navigation"></div>
      <div className="content">
        <div className="content-header">
          <h1>Payments</h1>
        </div>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
