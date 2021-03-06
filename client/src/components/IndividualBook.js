import React, { Component } from "react";
import axios from "axios";
import Summary from "./Summary";

export default class BookDetails extends Component {
  state = {
    isLoaded: false,
    isURLValid: false,
    isMinimized: true
  };

  handleClick = this.handleClick.bind(this);
  handleClick() {
    this.setState({ isMinimized: !this.state.isMinimized });
  }
  async componentDidMount() {
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.props.match.params.id}&key=AIzaSyAh3h9-vOZETzJ9sAli8dbZbjIRcr87R40`
    );
    if (response.data.items) {
      let {
        title,
        authors,
        publishedDate,
        description,
        imageLinks
      } = response.data.items[0].volumeInfo;

      this.setState({
        title,
        authors,
        publishedDate,
        description,
        imageLinks,
        isLoaded: true,
        isURLValid: true
      });
    } else {
      this.setState({
        isLoaded: true,
        isURLValid: false
      });
    }
  }
  render() {
    let {
      title,
      authors,
      description,
      publishedDate,
      imageLinks,
      isLoaded,
      isURLValid
    } = this.state;
    if (isLoaded) {
      if (isURLValid) {
        return (
          <div className="container">
            <div style={{ display: "flex" }}>
              <div className="card" style={{ flex: 1 }}>
                <img
                  src={imageLinks.thumbnail}
                  class="card-img-top"
                  alt="some image here"
                />
              </div>
              <div class="card" style={{ flex: 3 }}>
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <h6 class="card-subtitle">
                    by{" "}
                    {authors.map(e => {
                      if (authors.indexOf(e) != authors.length - 1)
                        return e + ", ";
                      else return e;
                    })}
                  </h6>
                  <p>IBSN-10: {this.props.match.params.id}</p>
                  <button
                    onClick={this.handleClick}
                    className="btn text-white bg-info"
                  >
                    {this.state.isMinimized ? "Expand" : "Collapse"}
                  </button>
                  {this.state.isMinimized ? null : (
                    <p class="card-text">{description || ""}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <h1>invalid URL</h1>;
      }
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
