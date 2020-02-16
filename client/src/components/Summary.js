import React, { Component } from "react";

export default class Summary extends Component {
  static defaultProps = {
    ISBN: "default isbn"
  };
  render() {
    return (
      <div>
        <h1>summaries here</h1>
      </div>
    );
  }
}
