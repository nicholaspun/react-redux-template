import { applyMiddleware, createStore } from "redux";

// Middleware:
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Reducers:
import rootReducer from "./reducers/index";

const initialState = {
  counter: 0,
};

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(rootReducer, initialState, middleware);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
