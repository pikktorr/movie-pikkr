import React, { Component } from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import Homepage from "../pages/homepage/homepage.page.jsx";
import AddMoviePage from "../pages/add-movie/add-movie.page";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/addMovie" component={AddMoviePage}/>
      </div>      
    );
  }
}

export default App;
