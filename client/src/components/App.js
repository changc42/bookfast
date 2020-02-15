import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./nav";
import Search from "./search";
import BookShelf from "./BookShelf";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: ''
    }
  }

  getSearchResult = result => {
      this.setState({ search: result })
      //this.makeAPICall(this.state.search)
  }

  makeAPICall = (searchTerm) => {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+inauthor:keyes`
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }


  makeAPICall = searchTerm => {};

  render() {
    console.log(this.state.data)
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/bookshelf">
            <BookShelf />
          </Route>
          <Route exact path="/">
            <div>
              <Search apiCall={this.makeAPICall} getSearchResult={this.getSearchResult} />
              <h1>Hello world this is the main page</h1>
            </div>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
