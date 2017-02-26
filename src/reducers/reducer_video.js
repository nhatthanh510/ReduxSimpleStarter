/**
 * Created by admin on 2/26/2017.
 */
import { SEARCH } from '../actions/action_search'

export const search_reducer = (state = {term : 'Son Tung'}, action) => {
  switch (action.type) {
      case SEARCH:
          return {...state, ...{term: action.term}}
      default :
          return state;
  }
};