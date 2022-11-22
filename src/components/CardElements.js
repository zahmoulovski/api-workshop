import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardElements = ({user}) => {
  //lina wlouli des objets 
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"   src="https://i.pinimg.com/736x/42/74/07/4274079ade920871b01cf40ac7102436.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
      {user.email} || {user.username}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardElements
