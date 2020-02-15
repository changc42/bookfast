import React, { Component } from "react";

export default class BookShelf extends Component {
  static defaultProps = {
    books: [0553169041, 1781107041, 1405280921]
  };
  render() {
    return (
      <div>
        <h1> i am boooks ehld</h1>
      </div>
    );
  }
}
