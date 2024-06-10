// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);