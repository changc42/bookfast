import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginConfirmation extends Component {
  render() {
    return (
      <div>
        <h1>Successfully Logged in!</h1>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
}
