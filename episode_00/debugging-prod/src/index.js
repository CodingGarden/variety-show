import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import LogRocket from 'logrocket';
LogRocket.init('u4zcnt/debugging-prod');

const store = createStore(rootReducer, applyMiddleware(
  promise,
  thunk,
  LogRocket.reduxMiddleware()
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
