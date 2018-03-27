import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import rootReducer from './reducers/index';
import Trocados from './containers/Trocados';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Trocados />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}