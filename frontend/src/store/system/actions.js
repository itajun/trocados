import { ADD_ERROR, SET_ERRORS } from "./reducers";

export const addError = (payload = {message: "unkown"}) => (
    {
        type: ADD_ERROR,
        payload
    });

export const setErrors = (payload = []) => (
    {
        type: SET_ERRORS,
        payload
    });