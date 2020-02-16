import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchFunc(props) {

  const inputStyle = {
    margin: 'auto',
    marginLeft: '10%',
    width: '70%',
    height: '30%',
    padding: '1%',
    border: '1px solid #000',
    position: 'relative'
  }

  const linkStyle = {
    marginTop: '40px'
  }

  return (
    <div>
      <input
        style={inputStyle}
        name="search"
        type="text"
        value={props.search}
        onChange={e => {
          props.updateSearchField(e.target.value);
        }}
        placeholder="Search for your fav book"
      ></input>
      <Link
        style={linkStyle}
        to="/bookList"
        onClick={() => {
          props.apiCall(props.search);
        }}
      >
        Search
      </Link>
    </div>
  );
}
