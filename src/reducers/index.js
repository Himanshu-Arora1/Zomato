import { combineReducers } from 'redux';
import reducerRestaurants from './reducer_restaurant'
import reducerRestaurant from './reducer_single_restaurant'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    restaurants: reducerRestaurants,
    singleRestaurant:reducerRestaurant,
    form:formReducer
});

export default rootReducer;
