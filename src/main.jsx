import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//importamos el archivo index.css para aplicar los estilos de forma global
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
