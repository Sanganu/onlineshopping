import React from "react";
import {Row, Col, Card, CardTitle,Icon} from "react-materialize"

function Videodetails(props) {
    let videolink = `https://www.youtube.com/embed/${props.id}?autoplay=0`
    return (
        <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            actions={[
              <a key="1" href={props.link}>This is a Link</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle> 
            <iframe className ="embed-responsive-item"
            title={props.title}
            src = {videolink}>
            </iframe></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
          >
           {props.title}
           {props.description}
           {props.channelTitle}
           {props.published}
          </Card>
        </Col>
      </Row>
    )
}

export default Videodetails;
