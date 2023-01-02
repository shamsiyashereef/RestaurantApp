
import {R_FAILURE, R_SUCCESS} from '../constants/restConstants'

export const RestaurantlistReducer=(state={restaurantlist:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{
            restaurantlist:action.payload
        }
        case R_FAILURE:
            return{
                restaurantlist:action.error
            }
        default:
            return state
    } 
}