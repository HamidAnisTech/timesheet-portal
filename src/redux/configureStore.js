import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function createStore() {
  let composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose;
  composeEnhancers = composeEnhancers(
    applyMiddleware(reduxImmutableStateInvariant(), thunk)
  );
  const store = configureStore({
    reducer: persistedReducer,
    composeEnhancers,
  });
  const persistor = persistStore(store);
  return { store, persistor };
}

export default createStore;
