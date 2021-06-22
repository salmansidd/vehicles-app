import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import { Provider } from 'react-redux';
import configStore from 'redux/store';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.css';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
