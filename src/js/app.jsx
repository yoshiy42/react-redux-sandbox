import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import Root from 'containers/root';

export default class App {
  constructor(rootElementId) {
    this.appElement = document.getElementById(rootElementId);
    if (this.appElement === null) {
      throw new Error('rootElement is not defined.');
    }
    this.configureStore();
    this.render();
  }

  configureStore() {
    const middleware = [thunk];

    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable global-require */
      const { createLogger } = require('redux-logger');
      const loggerMiddleware = createLogger();
      /* eslint-enable global-require */
      middleware.push(loggerMiddleware);
    }

    this.store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <Root />
      </Provider>,
      this.appElement
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new App('app');
  });
}
