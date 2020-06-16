import {
  START_FETCHING_PRODUCTS,
  SET_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  START_PRODUCT_UPDATE,
  UPDATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT,
  SET_CATEGORY,
} from "../actiontypes";

const initialState = {
  isLoading: false,
  products: [],
  category: "",
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
    case UPDATE_PRODUCT_SUCCESS:
      let updatedProducts = state.products.map((product) => {
        return product.id === action.payload.id
          ? (product = action.payload.data)
          : product;
      });
      return { ...state, isLoading: false, products: updatedProducts };
    case CREATE_PRODUCT:
      let newState = [...state.products, action.product];
      return { ...state, products: newState };
    case SET_CATEGORY:
      return { ...state, category: action.payload.category };
    default:
      return { ...state };
  }
}
