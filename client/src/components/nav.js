import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
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
