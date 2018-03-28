import { SET_CATEGORIES } from './reducers.js';
import { fetchCategories } from './services.js';

export const setCategories = (payload = []) => (
    {
        type: SET_CATEGORIES,
        payload
    });

export const lazyFetchCategories = () => (dispatch) => {
    fetchCategories()
        .then(categories => {
            dispatch(setCategories(categories))
        })
};