import axios from "axios"
import {R_FAILURE, R_SUCCESS} from '../constants/restConstants'
 export const Restlistaction=()=>async(dispatch)=>{
    
    try{
        const result= await axios.get('/restaurants.json');
        console.log(result.data.restaurants);
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants
        })
    }
    catch(error){
        dispatch({
            type:R_FAILURE,
            error:error
        })

    }
}