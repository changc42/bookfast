import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./nav";
import Search from "./search";
import BookShelf from "./BookShelf";
import BookSummaries from "./BookDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: ""
    };
  }

  getSearchResult = result => {
    this.setState({ search: result });
    //this.makeAPICall(this.state.search)
  };

  makeAPICall = searchTerm => {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAh3h9-vOZETzJ9sAli8dbZbjIRcr87R40`;
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  render() {
    console.log(this.state.data);
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/bookshelf">
            <BookShelf />
          </Route>
          <Route exact path="/">
            <div>
              <Search
                apiCall={this.makeAPICall}
                getSearchResult={this.getSearchResult}
              />
            </div>
          </Route>
          <Route exact path="/bookSummaries/:id" component={BookSummaries} />
        </div>
      </BrowserRouter>
    );
  }
}
