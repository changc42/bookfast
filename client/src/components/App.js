import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./nav";
import Search from "./search";
import BookShelf from "./BookShelf";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  getSearchResult = result => {
    this.setState({ search: result });
  };

  makeAPICall = searchTerm => {};

  render() {
    console.log(this.state.search);
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/bookshelf">
            <BookShelf />
          </Route>
          <Route exact path="/">
            <div>
              <Search getSearchResult={this.getSearchResult} />
              <h1>Hello world this is the main page</h1>
            </div>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
