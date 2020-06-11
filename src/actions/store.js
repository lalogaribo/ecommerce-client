import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { productsReducer } from "../reducers/productsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
