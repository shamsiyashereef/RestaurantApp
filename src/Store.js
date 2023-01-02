import{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import  {RestaurantlistReducer} from './Reducers/restReducer'
//to generate middleware
const reducers=combineReducers({//2
restaurantReducer:RestaurantlistReducer
})

const middleawre=[thunk]

const store=createStore(reducers,applyMiddleware(...middleawre))//1

export default store