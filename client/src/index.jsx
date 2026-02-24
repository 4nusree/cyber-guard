import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

console.log("Rendering App...");
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  ReactDOM.createRoot(rootElement).render(
    <App />
  );
}
