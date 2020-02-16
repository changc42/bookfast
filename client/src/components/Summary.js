import React, { Component } from "react";
import CKEditor from 'ckeditor4-react'



class Summary extends Component {
  

  editorStyles = {
    width: '80%',
    margin: 'auto'
  }

  textStyles = {
    textAlign: 'center'
  }

  render() {
    return (
      <div styles={this.editorStyles}>
        <h1 style={this.textStyles}>Write a Summary about the book</h1>
        <CKEditor style={this.editorStyles} data=""></CKEditor>
      </div>
    );
  }
}

export default Summary;
