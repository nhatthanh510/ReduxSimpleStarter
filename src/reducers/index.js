import { combineReducers } from 'redux';
import { search_reducer, fetch_reducer } from '../reducers/reducer_video'

const rootReducer = combineReducers({
    search_reducer,
    fetch_reducer
});

export default rootReducer;
