import React, { Component } from "react";
import { response } from "express";

export default class Nav extends Component {

  constructor(props){
    super(props)
    this.state = {
      isAuth: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/auth/google/callback')
         .then((response) => response.json())
      .then((isAuth) => this.setState({ isAuth: isAuth }))
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
        <a className="nav-link" href="/auth/google">
          test
        </a>
      </nav>
    );
  }
}
