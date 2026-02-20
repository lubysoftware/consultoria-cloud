import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("Initializing React app...");
createRoot(rootElement).render(<App />);
console.log("React app initialized");
