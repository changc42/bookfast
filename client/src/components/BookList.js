import React, { Component, useState } from "react";
import SearchFunc from "./SearchFunc";
import BookCard from "./BookCard";
import _ from "lodash";

export default function BookList(props) {
  let [isLoaded, setIsLoaded] = useState(false);
  let { data, apiCall, updateSearchField, search } = props;
  return (
    <div>
      <SearchFunc
        apiCall={apiCall}
        updateSearchField={updateSearchField}
        search={search}
      />
      {_.map(data, e => {
        return <BookCard info={e.volumeInfo} />;
      })}
    </div>
  );
}
