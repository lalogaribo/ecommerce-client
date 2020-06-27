import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { userReducer } from "../redux/reducers/userReducer";
import { productsReducer } from "../redux/reducers/productsReducer";
import { cartReducer } from "../redux/cart/cartReducer";

const middlewares = [thunk, logger];
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
