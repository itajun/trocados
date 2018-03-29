import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {categories} from './basics/reducers'
import {errors} from './system/reducers'

const rootReducer = combineReducers({categories, errors});

const reduxMiddleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => createStore( rootReducer, {}, reduxMiddleware );