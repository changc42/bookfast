import React, { Component } from "react";

import Navbar from "./nav";
import Search from './search'

export default class App extends Component {

  constructor(props) {
    super(props)
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



  render() {
    console.log(this.state.data)
    return (
      <div>
        <Navbar />
        <Search getSearchResult={this.getSearchResult} />
        <button type='submit' onSubmit={this.makeAPICall(this.state.search)}>Submit</button>
      </div>
    );
  }
}
