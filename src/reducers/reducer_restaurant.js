import { FETCH_RESTAURANT } from "../actions";
import _ from "lodash";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      // return  _.map(state.concat([action.payload.data]));
      return state.concat(action.payload.data.restaurants);
    //return _.mapKeys(action.payload.data],'id');
    //	return { ...state, { ...state[action.payload.data],'id'}  }
    default:
      return state;
  }
}
