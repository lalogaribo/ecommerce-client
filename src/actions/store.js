import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "../redux/user/userReducer";
import { productsReducer } from "../redux/reducers/productsReducer";
import { cartReducer } from "../redux/cart/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", 'user'],
};

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
