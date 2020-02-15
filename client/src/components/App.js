import React, { Component } from "react";

import Navbar from "./nav";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello world this is the main page</h1>
      </div>
    );
  }
}
