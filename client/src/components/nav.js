import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          BookFast
        </a>
        <a className="nav-link" href="/bookshelf">
          BookShelf
        </a>
        <a className="nav-link" href="/api">
          test
        </a>
      </nav>
    );
  }
}
