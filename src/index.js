import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations/i18n';
import store from './store';
import './index.scss';
import AppContainer from './screens/app/AppContainer';
import theme from './styles/Theme';
import { ThemeProvider } from '@material-ui/core/styles';


ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

