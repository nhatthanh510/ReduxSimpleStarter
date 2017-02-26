/**
 * Created by admin on 2/26/2017.
 */
export const SEARCH = 'SEARCH';

export const  search_term = (term) => {
    return {
        type : SEARCH,
        term
    }
}