import React, { useState } from "react";

export default function BookCard(props) {
  let { info } = props;
  let [isMinimized, setIsMinimized] = useState(false);

  if (info)
    return (
      <div className="container" style={{ display: "flex" }}>
        <div class="card" style={{ flex: 1 }}>
          <img
            class="card-img-top"
            src={info.imageLinks.thumbnail}
            alt="cover of book"
          />
        </div>
        <div class="card" style={{ flex: 3 }}>
          <div class="card-body">
            <h5 class="card-title">{info.title}</h5>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="btn text-white bg-info"
            >
              {isMinimized ? "Expand" : "Collapse"}
            </button>
            {isMinimized ? (
              ""
            ) : (
              <p class="card-text">{info.description || "no description"}</p>
            )}
          </div>
        </div>
      </div>
    );
  else return <h1> </h1>;
}
