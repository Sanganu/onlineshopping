import React,{ useState } from "react";
import { TextInput, Button } from "react-materialize";
import API from "../APICall/API";

function SearchVideo(props){
    const[searchTerm,setSearchTerm]=useState("")
    const getVideos = () =>{
        API.getReferenceVideo(searchTerm)
        .then( response => {
                console.log("Response",response)
        })
    }
  
        return(<div>
     
                <label>Enter Search String</label>
                <TextInput name={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <Button onClick={getVideos}>Search Videos</Button>
   
        </div>)

}

export default SearchVideo;

