import React, { Component } from 'react';

export default class BookList extends Component {
  render() {

    let vol = ''
    let author = ''
    let imgLink = ''

    // check to see its not empty
    if(this.props.bookData) {
        console.log(typeof(this.props.bookData))
    //     console.log(this.props.bookData[0].volumeInfo.imageLinks)
        vol = this.props.bookData.map(item => {
            return <li>{item.volumeInfo}</li>
       })
    //    author = this.props.bookData.map(item => {
    //         return <li>{item.volumeInfo.authors[0]}</li>
    //     })
    //     imgLink = this.props.bookData.map(item => {
    //         return <li>{item.volumeInfo.imageLinks.thumbnail}</li>
    //     })

        return (
            console.log(vol)
        //    {vol.forEach(e => console.log(e.imageLinks.thumbnail))}
            );
    }else {
        return <h1>Nothing</h1>
    }
  }
}
