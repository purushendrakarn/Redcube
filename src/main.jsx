import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";



const basename = import.meta.env.MODE === "production" ? "/Redcube" : "/";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.MODE === "production" ? "/Redcube" : "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
