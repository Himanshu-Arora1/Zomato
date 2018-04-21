import { FETCH_RESTAURANTS,FETCH_RESTAURANT } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
            return state.concat(action.payload.data.restaurants);
     default:
      return state;
  }
}
