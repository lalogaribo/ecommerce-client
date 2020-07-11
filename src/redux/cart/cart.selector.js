import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cart
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const getItemCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0)
);

export const selectTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.price;
  }, 0)
);
