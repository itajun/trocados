import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/index';
import Trocados from './containers/Trocados';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  }
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Trocados />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
}