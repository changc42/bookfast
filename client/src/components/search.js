import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  static defaultProps = {
    updateSearchField: () => alert("default updateSearchField"),
    search: "default"
  };

  handleChange = e => {
    let val = e.target.value;
    this.props.updateSearchField(val);
  };

  handleClick = this.handleClick.bind(this);
  handleClick() {
    this.props.apiCall(this.state.search);
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10%", width: "50%" }}>
        <input
          name="search"
          type="text"
          value={this.props.search}
          onChange={this.handleChange}
          placeholder="Search for your fav book"
        ></input>
        <Link to="/bookList" onClick={this.handleClick}>
          Search
        </Link>
      </div>
    );
  }
}
