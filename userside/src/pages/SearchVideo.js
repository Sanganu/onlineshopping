import React,{ useState } from "react";
import { TextInput } from "react-materialize";

function SearchVideo(props){
//     const[searchTerm,setSearchTerm]=useState("")
    
  
        return(<div>
                <div>
                <label>Enter Search String</label>
                <TextInput name={props.searchTerm} onChange={(event) => props.getSearchTerm(event.target.value)} />
                </div>
        </div>)

}

export default SearchVideo;

