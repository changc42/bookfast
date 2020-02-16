import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchFunc(props) {
  return (
    <div>
      <input
        name="search"
        type="text"
        value={props.search}
        onChange={e => {
          props.updateSearchField(e.target.value);
        }}
        placeholder="Search for your fav book"
      ></input>
      <Link
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
