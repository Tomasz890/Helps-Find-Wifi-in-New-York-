import React from 'react'
import { Card } from 'react-bootstrap'

function InfoCard(props) {
  console.log(props.wifi.name)
  console.log(props.wifi.objectid)
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>{props.wifi.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.wifi.provider}</Card.Subtitle>
        <Card.Text>
        {props.wifi.location_t}
          
        </Card.Text>
 
      </Card.Body>
    </Card>
  );
}

export default InfoCard;