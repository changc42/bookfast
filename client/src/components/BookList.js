import React, { Component } from 'react';

export default class BookList extends Component {
  render() {

    let vol = ''
    let author = ''
    let imgLink = ''

    // check to see its not empty
    if(this.props.bookData) {
        console.log(this.props.bookData[0].volumeInfo.imageLinks)
        vol = this.props.bookData.map(item => {
            return <li>{item.volumeInfo}</li>
       })
       author = this.props.bookData.map(item => {
            return <li>{item.volumeInfo.authors[0]}</li>
        })
        imgLink = this.props.bookData.map(item => {
            return <li>{item.volumeInfo.imageLinks.thumbnail}</li>
        })

        return (
            <div>
                    
            <ul>
                
            {console.log(vol)}
                {console.log(vol[0].props.children.title)}
                {/* {author}
                <img src={this.props.bookData.map(item => {
                    item.imageLinks.thumbnail}
                )} />
                if({vol.imageLinks}){
                    <img src={vol.imageLinks.smallThumbnail} />
                } */}
                
                
            </ul>
                
    
    
            </div>
            
            );
    }else {
        return <h1>Nothing</h1>
    }
  }
}
