import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'

import reducers from './reducers';
import App from './components/app';

const enhancer = compose(
  persistState()
);

const store = createStore(reducers, [], enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
