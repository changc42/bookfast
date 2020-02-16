import React, { Component } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default class BookShelf extends Component {
  static defaultProps = {
    loaded: false,
    books: ["0553169041", "1781107041", "1405280921"]
  };

  async makeAPICall(isbn) {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyAh3h9-vOZETzJ9sAli8dbZbjIRcr87R40`;
    let response = await axios.get(URL);
    this.setState({
      output: [
        ...this.state.output,
        <BookCard info={response.data.items[0].volumeInfo} />
      ]
    });
  }

  state = {
    output: []
  };

  async componentDidMount() {
    this.props.books.forEach(e => {
      this.makeAPICall(e);
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Your Books:</h1>
        {this.state.output}
      </div>
    );
  }
}
