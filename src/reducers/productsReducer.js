import {
  START_FETCHING_PRODUCTS,
  SET_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  START_PRODUCT_UPDATE,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
} from "../actiontypes";

const initialState = {
  isLoading: false,
  products: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PRODUCTS:
      return { ...state, isLoading: true };
    case FETCHING_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false };
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case START_PRODUCT_UPDATE:
      return { ...state, isLoading: true };
    case UPDATE_PRODUCT:
      return { ...state, isLoading: false };
    case CREATE_PRODUCT:
      let newState = [...state.products, action.product];
      return { ...state, products: newState };
    default:
      return { ...state };
  }
}
