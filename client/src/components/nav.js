import React, { Component } from "react";
import axios from "axios";

export default class Nav extends Component {
  state = {
    isLoggedIn: false
  };
  async componentDidMount() {
    let response = await axios.get("/auth/currentUser");
    response.data
      ? this.setState({ isLoggedIn: true })
      : this.setState({ isLoggedIn: false });
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

        {this.state.isLoggedIn ? (
          <a className="nav-link right" href="/api/logout">
            Logout
          </a>
        ) : (
          <a className="nav-link right" href="/auth/google">
            Login
          </a>
        )}
      </nav>
    );
  }
}
