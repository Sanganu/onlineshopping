import React from "react";
import SearchVideo from "./SearchVideo";


function Homepage(){
    return(<div>
       
        <div className="section white">
          <div className="row container">
            <h2 className="header">
               Video Reference Library App.
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
               A MERN stack app to store reference videos.
            </p>
            <SearchVideo />
          </div>
        </div>
       
      </div>)
}

export default Homepage;
