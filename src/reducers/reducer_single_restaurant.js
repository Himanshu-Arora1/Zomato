import { FETCH_RESTAURANT } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
              console.log('action',action.payload.data);
              return state.concat(action.payload.data); 
     default:
      return state;
  }
}
