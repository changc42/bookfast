import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function BookCard(props) {
  let { info } = props;
  let [isMinimized, setIsMinimized] = useState(false);


  let buttonStyle = {
    marginLeft: '2%'
  }

  // checks weather imageLinks is undefined or not
  let thumbnailVaild = () => {
    if(info.imageLinks) {
      return info.imageLinks.thumbnail
    }else{
      return 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/jquery4u/2012/06/Dynamic-Dummy-Image-Generator.jpg'
    }
  }

  if (info)
    return (
      <div className="container" style={{ display: "flex" }}>
        <div class="card" style={{ flex: 1 }}>
      
          <img
            class="card-img-top"
            src={thumbnailVaild()}
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
            <button style={buttonStyle} className="btn text-white bg-info">Rating</button>\
            <Link style={buttonStyle} to="/Summary" className="btn text-white bg-info">Summary</Link>
            
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
