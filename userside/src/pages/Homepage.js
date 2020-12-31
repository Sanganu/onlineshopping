import React from "react";
import SearchVideo from "./SearchVideo";


function Homepage(){
    return(<div>
       
        <div className="section white">
          <div className="row container">
            <h6 className="header">
            An App to store Reference Videos in relation to Coding
            </h6>
            {/* <p className="grey-text text-darken-3 lighten-3">
             Video Reference Library
            </p> */}
            <SearchVideo />
          </div>
        </div>
       
      </div>)
}

export default Homepage;
