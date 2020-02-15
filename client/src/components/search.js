import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = e => {
    let val = e.target.value;
    this.setState({ search: val });
    this.props.getSearchResult(val);
  };

  handleClick = e => {
    this.props.apiCall(this.state.search);
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10%", width: "50%" }}>
        <input
          name="search"
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="Search for your fav book"
        ></input>
        <Link to='/bookList' onClick={this.handleClick}>Search</Link>
      </div>
    );
  }
}
