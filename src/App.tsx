import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  );
};

export default App;
