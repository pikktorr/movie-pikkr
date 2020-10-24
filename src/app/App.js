import React, { Component } from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

import Homepage from "../pages/homepage/homepage.page.jsx";
import AddMoviePage from "../pages/add-movie/add-movie.page";

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
        <Route>
          <Homepage />
          <AddMoviePage />
        </Route>
      </ErrorBoundary>
    );
  }
}

export default App;
