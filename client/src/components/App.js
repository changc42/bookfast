import React, { Component } from "react";

import Navbar from "./nav";
import Search from './search'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  getSearchResult = result => {
      this.setState({ search: result })
  }

  makeAPICall = (searchTerm) => {

  }



  render() {
    console.log(this.state.search)
    return (
      <div>
        <Navbar />
        <Search getSearchResult={this.getSearchResult} />
        <h1>Hello world this is the main page</h1>
      </div>
    );
  }
}
