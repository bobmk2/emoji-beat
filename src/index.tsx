import { hijackEffects } from 'stop-runaway-react-effects';

if (process.env.NODE_ENV !== 'production') {
  hijackEffects();
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

const composeEnhancers =
  // @ts-ignore
  process.env.NODE_ENV !== 'development' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
