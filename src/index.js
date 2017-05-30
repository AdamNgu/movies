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

const store = createStore(reducers, {movies: []}, enhancer);
// const store = createStore(reducers); // for local testing

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
