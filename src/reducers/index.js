import { combineReducers } from 'redux';
import reducerRestaurant from './reducer_restaurant'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	restaurants: reducerRestaurant,
    form:formReducer
});

export default rootReducer;
