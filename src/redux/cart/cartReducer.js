import { CartTypes } from "./CartTypes";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  cart: [],
  total: 0,
  amount: 0,
  hidden: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_ITEM_TO_CART:
      return { ...state, cart: addItemToCart(state.cart, action.payload) };
    case CartTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartTypes.DECREASE_ITEM:
      return { ...state, cart: removeItemFromCart(state.cart, action.payload) };

    case CartTypes.RESET_CART:
      return { ...state, cart: [] };

    //   case CALCULATE_TOTAL:
    //     let { total, amount } = state.cart.reduce(
    //       (cartTotal, cartItem) => {
    //         const { price, amount } = cartItem;
    //         const itemTotal = price * amount;

    //         cartTotal.total += itemTotal;
    //         cartTotal.amount += amount;

    //         return cartTotal;
    //       },
    //       {
    //         total: 0,
    //         amount: 0,
    //       }
    //     );
    //     total = parseFloat(total.toFixed(2));
    //     return { ...state, total, amount };
    default:
      return state;
  }
};
