/**
 * Created by admin on 2/26/2017.
 */
import { SEARCH, FETCH, fetchVideo, search_term } from '../actions/action_search'


export const search_reducer = (state = {term : 'Son Tung'}, action) => {
  switch (action.type) {
      case SEARCH:
          return {...state, ...{term: action.term}}
      default :
          return state;
  }
};

export const fetch_reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH:
            console.log(action.payload.data);
            return {...action.payload.data, ...state};
        default :
            return state;
    }
}