import React, { Component } from "react";
import Search from "./Search";

export default function BookList(props){
  return(
      <div>
        <h1>this is booklist</h1>
        <Search />
        {this.props.bookData}
      </div>  
  )
}

export default class BookList extends Component {
  render() {
    return (
      
    );
  }
}
