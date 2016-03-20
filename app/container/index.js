'use strict'

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

import reducers from '../reducers';
import App from '../components/app';

class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Container;