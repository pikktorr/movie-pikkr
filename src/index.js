import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app/App";

import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <App className="app-container" />
    </Router>
  </ErrorBoundary>,
  document.getElementById("root")
);
