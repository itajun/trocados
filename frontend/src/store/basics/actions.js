import { SET_CATEGORIES } from './reducers.js';
import { fetchCategories, removeCategory, addCategory } from './services.js';

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

export const lazyRemoveAndUpdateCategories = (id) => (dispatch) => {
    removeCategory(id)
        .then(() => {
            lazyFetchCategories()(dispatch)
        })
};

export const lazyAddAndUpdateCategories = (category) => (dispatch) => {
    addCategory(category)
        .then(() => {
            lazyFetchCategories()(dispatch)
        })
};