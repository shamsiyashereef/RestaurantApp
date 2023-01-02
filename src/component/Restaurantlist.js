import { useEffect, useState } from "react"
import React from 'react'
import Cards from "./Cards"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Restlistaction } from "../Action/Restlistaction";
import { useDispatch, useSelector } from "react-redux";
function Restaurantlist() {
    //to hold the value
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to get all restaurent information from restaurent.json
    // const getRestaurant=async()=>{
    //     await fetch('/restaurants.json')
    //       .then((data) => {
    //         data.json()
    //         .then((result) => {
    //             //console.log(result);
    //             setRestaurants(result.restaurants)
    //         })
    //        // console.log(data);
    //     })
    // }
    //console.log(allRestaurants);
const dispatch=useDispatch();
const result = useSelector(state=>state.restaurantReducer)
console.log(result);
const {restaurantlist}=result
    useEffect(()=>{
        // getRestaurant()
        dispatch(Restlistaction());
    },[])


  return (
    <Row>{
      restaurantlist.map(item=>(
        //<h3>{item.name}</h3>
        <Col sm={12} md={6} lg={4} xl={3}><Cards restaurant={item} />
        </Col>
      ))
      }
    </Row>
  )
}

export default Restaurantlist