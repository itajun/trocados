import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Trocados from './containers/Trocados';
import buildStore from './store'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  }
});


export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={buildStore()}>
        <BrowserRouter>
          <Trocados />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
}