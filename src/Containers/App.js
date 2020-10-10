import React, { Component } from "react";
import "./App.css";

import Header from "../Components/Head";
import Body from "../Components/Body";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="app-component">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
