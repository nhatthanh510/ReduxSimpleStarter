/**
 * Created by admin on 2/26/2017.
 */
import { SEARCH, FETCH, SELECT_VIDEO, fetchVideo, search_term } from '../actions/action_search'


export const search_reducer = (state = {term : 'Son Tung'}, action) => {
  switch (action.type) {
      case SEARCH:
          return {...state, ...{term: action.term}}
      default :
          return state;
  }
};


export const fetch_reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH:
            console.log(action.payload.data);
            return {
                ...state,
                ...{videoData : action.payload.data.items, selectedVideo : action.payload.data.items[0]}
            };
        case SELECT_VIDEO:
            return {
                ...state,
                ...{selectedVideo : action.video}
            };
        default :
            return state;
    }
};
