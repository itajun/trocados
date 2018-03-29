import { SET_CATEGORIES } from './reducers';
import { fetchCategories, removeCategory, addCategory, updateCategory } from './services';
import { addError } from '../system/actions';

export const setCategories = (payload = []) => (
    {
        type: SET_CATEGORIES,
        payload
    });

export const asyncFetchCategories = () => (dispatch) => {
    fetchCategories()
        .then(categories => {
            dispatch(setCategories(categories))
        })
        .catch(error => {
            dispatch(addError({ response: error }))
        })
};

export const asyncRemoveCategory = (id) => (dispatch) => {
    removeCategory(id)
        .then(() => {
            asyncFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error }))
        })
};

export const asyncAddCategory = (category) => (dispatch) => {
    addCategory(category)
        .then(() => {
            asyncFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error }))
        })
};

export const asyncUpdateCategory = (category) => (dispatch) => {
    updateCategory(category)
        .then(() => {
            asyncFetchCategories()(dispatch)
        })
        .catch(error => {
            dispatch(addError({ response: error }))
        })
};