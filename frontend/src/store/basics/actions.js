import { SET_CATEGORIES } from './reducers';
import { fetchCategories, removeCategory, addCategory, updateCategory } from './services';
import { addError } from '../system/actions';

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
        .catch(error => {
            dispatch(addError({ response: error.response }))
        })
};

export const lazyRemoveAndUpdateCategories = (id) => (dispatch) => {
    removeCategory(id)
        .then(() => {
            lazyFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error.response }))
        })
};

export const lazyAddAndUpdateCategories = (category) => (dispatch) => {
    addCategory(category)
        .then(() => {
            lazyFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error.response }))
        })
};

export const lazyUpdateAndUpdateCategories = (category) => (dispatch) => {
    updateCategory(category)
        .then(() => {
            lazyFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error.response }))
        })
};