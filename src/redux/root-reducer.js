import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/user/userReducer";
import { productsReducer } from "../redux/reducers/productsReducer";
import { cartReducer } from "../redux/cart/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
