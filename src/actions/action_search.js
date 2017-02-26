/**
 * Created by admin on 2/26/2017.
 */
import axios from 'axios';
const API_KEY = 'AIzaSyDXwOH4N2WINlYccGOzmWdpSK7JLRTUUKs';
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=id&type=video`;
export const SEARCH = 'SEARCH';
export const FETCH = 'FETCH';


export const  search_term = (term) => {
    return {
        type : SEARCH,
        term
    }
};

export const fetchVideo = (term) => {
    const url = `${ROOT_URL}&q=${term}`
    const request = axios.get(url);
    return {
        type : FETCH,
        payload : request
    }
};
