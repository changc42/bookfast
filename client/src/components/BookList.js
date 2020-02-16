import React, { Component } from 'react';

export default class BookList extends Component {

    // vol = () =>
    //     this.props.bookData.map(item => (
    //         <div>
    //             <h1>{item.volumeInfo.title}</h1>
    //             <h3>{item.volumeInfo.author}</h3>
    //         </div>
    //      ) )
   
  render() {


    let author = ''
    let imgLink = ''

    // check to see its not empty
        // console.log(typeof(this.props.bookData))
    //     console.log(this.props.bookData[0].volumeInfo.imageLinks)
        
    //    author = this.props.bookData.map(item => {
    //         return <li>{item.volumeInfo.authors[0]}</li>
    //     })
    //     imgLink = this.props.bookData.map(item => {
    //         return <li>{item.volumeInfo.imageLinks.thumbnail}</li>
    //     })

        return (<div></div>)
            
        //    { vol.split(',').forEach(e => console.log(e.imageLinks.thumbnail)) }
            
    
  }
}
