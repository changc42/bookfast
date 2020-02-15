import React, { Component } from 'react';

export default class BookList extends Component {
  render() {

    let title = ''
    let author = ''
    let imgLink = ''

    // check to see its not empty
    if(this.props.bookData) {
        title = this.props.bookData.map(item => {
            return <li>{item.volumeInfo.title}</li>
       })
       author = this.props.bookData.map(item => {
            return <li>{item.volumeInfo.authors[0]}</li>
        })
        imgLink = this.props.bookData.map(item => {
            return <li>{item.volumeInfo.imageLinks.thumbnail}</li>
        })
    }

    console.log(imgLink)

    return (
        <div>
                
        <ul>
            {title}
            {author}
            {imgLink}
            <img src={imgLink} />
        </ul>
            


        </div>
        
        // <div>


        

        // </div>
    );
  }
}
