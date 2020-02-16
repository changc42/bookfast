import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./nav";
import Search from "./Search";
import BookShelf from "./BookShelf";
import BookList from "./BookList";
import SearchFunc from "./SearchFunc";

import BookSummaries from "./BookDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: "default"
    };
  }

  updateSearchField = result => {
    this.setState({ search: result });
    //this.makeAPICall(this.state.search)
  };

  // makeAPICall = searchTerm => {
  //   let URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAh3h9-vOZETzJ9sAli8dbZbjIRcr87R40`;
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ data });
  //     });
  // };

  makeAPICall2 = this.makeAPICall2.bind(this);
  async makeAPICall2(searchTerm) {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAh3h9-vOZETzJ9sAli8dbZbjIRcr87R40`;
    let response = await axios.get(URL);
    this.setState({ data: response.data.items });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/bookshelf">
            <BookShelf />
          </Route>

          <Route
            exact
            path="/"
            render={props => (
              <SearchFunc
                {...props}
                apiCall={this.makeAPICall2}
                updateSearchField={this.updateSearchField}
                search={this.state.search}
              />
            )}
          />
          <Route
            exact
            path="/bookList"
            render={props => <BookList {...props} bookData={this.state.data} />}
          />
          <Route exact path="/bookSummaries/:id" component={BookSummaries} />
        </div>
      </BrowserRouter>
    );
  }
}
