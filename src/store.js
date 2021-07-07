import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import analyticsMiddleware from './middlewares/analyticsMiddleware';

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const middlewares = [thunk, analyticsMiddleware];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
