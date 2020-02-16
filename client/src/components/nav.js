import React, { Component } from "react";
import axios from "axios";

export default class Nav extends Component {
  state = {
    isLoggedIn: false
  };
  async componentDidMount() {
    let user = axios.get("/auth/currentUser");
    if (user) this.setState({ isLoggedIn: true });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          BookFast
        </a>
        <a className="nav-link" href="/bookshelf">
          BookShelf
        </a>
        <a className="nav-link right" href="/auth/google">
          Login
        </a>
      </nav>
    );
  }
}
