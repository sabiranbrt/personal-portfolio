import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/main.scss";
import Nestedlayout from "./components/NestedLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Nestedlayout />
    </Router>
  </StrictMode>
);
