import React, { Component } from "react";
import axios from "axios";

export default class BookShelf extends Component {
  static defaultProps = {
    loaded: false,
    books: ["0553169041", "1781107041", "1405280921"]
  };

  render() {
    return (
      <div>
        <h1>title</h1>
      </div>
    );
  }
}
