import { CartTypes } from "./CartTypes";

export const toggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: CartTypes.DECREASE_ITEM,
  payload: item,
});

export const resetCart = () => ({
  type: CartTypes.RESET_CART,
});
