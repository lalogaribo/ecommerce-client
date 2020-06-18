import {
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
  RESET_CART,
  REMOVE_ITEM,
  ADD_ITEM_TO_CART,
  CALCULATE_TOTAL,
} from "../actiontypes";

const INITIAL_STATE = {
  cart: [],
  total: 0,
  amount: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let newCart = [...state.cart, action.payload];
      return { ...state, cart: newCart };

    case REMOVE_ITEM:
      let filterCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filterCart };

    case INCREASE_ITEM_AMOUNT:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.quantity > cartItem.amount) {
            cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          } else {
            console.log("unable to add more items");
          }
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };

    case DECREASE_ITEM_AMOUNT:
      let decreasedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: decreasedCart };

    case RESET_CART:
      return { ...state, cart: [] };

    case CALCULATE_TOTAL:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
};
