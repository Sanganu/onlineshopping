import React from "react";
import { Card, CardTitle,Icon} from "react-materialize"

function Videodetails(props) {
    let videolink = `https://www.youtube.com/embed/${props.id}?autoplay=0`
    return (
        
          <Card>
          
          
           
       
          
             <iframe className ="embed-responsive-item"
            title={props.title}
            src = {videolink}>
            </iframe>
           
          
          <CardTitle> {props.title}</CardTitle>
           <p>{props.description}</p>
           <p>{props.channelTitle}</p>
           <p>{props.published}</p>
           <a key="1" href={props.link} rel="noopener noreferer" target="_blank">YOUTUBE LINK</a>
       
          </Card>
      
    )
}

export default Videodetails;
