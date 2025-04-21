import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "./App.css";
// import '../src/components/ServerErrorAnimation.css'; 
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
