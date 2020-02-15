import React, { Component } from "react";

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
    console.log("in handleclick");
    this.props.apiCall(this.state.search);
    console.log("at end of handleCLick");
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
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}
