import React, { Component } from "react";
import CKEditor from "ckeditor4-react";

class Summary extends Component {
  editorStyles = {
    width: "80%",
    margin: "auto"
  };

  textStyles = {
    textAlign: "center"
  };

  render() {
    return (
      <div styles={this.editorStyles} className="container">
        <h1 style={this.textStyles}>Write a Summary about the book</h1>
        <CKEditor style={this.editorStyles} data=""></CKEditor>
        <button
          style={{ float: "right" }}
          type="button"
          class="btn btn-success"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Summary;
