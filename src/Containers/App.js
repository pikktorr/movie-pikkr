import React, { Component } from "react";
import "./App.css";

import Header from "../Components/Header";
import Body from "../Components/Body";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("fiasdas");
  }

  
  render() {
    return (
      <ErrorBoundary>
        <div className="app-container">
          <Header />
          <Body />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
