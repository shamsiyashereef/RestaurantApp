import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';
function Viewrest() {
    const params=useParams();
    console.log(params.id);
    //to hold the value
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to get all restaurent information from restaurent.json
    const getRestaurant=async()=>{
        await fetch('/restaurants.json')
          .then((data) => {
            data.json()
            .then((result) => {
                //console.log(result);
                setRestaurants(result.restaurants)
            })
           // console.log(data);
        })
    }
 
    useEffect(()=>{
        getRestaurant()
    },[])
    console.log(allRestaurants);
 const Viewrests=allRestaurants.find(item=>item.id==params.id)
console.log(Viewrests);


    
  return (
    <>
   { 
    Viewrests?(
        <Row>
         <Col style={{border: '2px solid white',borderRadius: '10px'}} >
         <Image src={Viewrests.photograph} fluid/>
         </Col>
         <Col  >
         <p>ID:{Viewrests.id}</p>
         <h1>Name:{Viewrests.name}</h1>
         <h4>Neighborhood:{Viewrests.neighborhood}</h4>
         <h5>Adress:{Viewrests.address}</h5>
         <h5>Cuisine type:{Viewrests.cuisine_type}</h5>
         <Restoperation operate={Viewrests.operating_hours} />
         <br/>
         <br/>
         <Restreview reviews={Viewrests.reviews} />
         </Col>
        </Row>

    ):'null'
 
    }
    </>
  )
}

export default Viewrest