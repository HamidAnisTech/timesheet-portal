import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
function createStore() {
  let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  composeEnhancer = composeEnhancer(
    applyMiddleware(reduxImmutableStateInvariant())
  );
  return configureStore({
    reducer: rootReducer,
    initialState,
    composeEnhancer,
  });
}

export default createStore;
