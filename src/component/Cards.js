import React from 'react'
import './Card.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Cards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:"none",color:"white"}} to={`/viewrest/${restaurant.id}`}><Card className='m-2'>
    <Card.Img variant="top"className='p-2 image' src={restaurant.photograph} style={{border: '2px solid white',borderRadius: '10px'}} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      
      <Card.Text>
      {restaurant.neighborhood}
      </Card.Text>
    </Card.Body>
  </Card></Link>
  )
}

export default Cards