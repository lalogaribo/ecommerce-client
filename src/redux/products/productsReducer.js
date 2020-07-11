import {ProductTypes} from "./ProductTyes";
import {updateProduct} from "./products.utils";

const INITIAL_STATE = {
	isLoading: false,
	products: [],
	category: "",
	minPrice: 0,
	maxPrice: 0,
	keyword: "",
	product: null
};

export const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductTypes.START_FETCHING_PRODUCTS:
			return {...state, isLoading: true}
		case ProductTypes.FETCHING_PRODUCTS_SUCCESS:
			return {...state, isLoading: false}
		case ProductTypes.SET_PRODUCTS:
			return {...state, products: action.products}
		case ProductTypes.FETCH_PRODUCT_BY_ID:
			return {...state, product: action.payload}
		case ProductTypes.START_PRODUCT_UPDATE:
			return {...state, isLoading: true};
		case ProductTypes.UPDATE_PRODUCT_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: updateProduct(state.products, action.payload.id, action.payload.data)
			}
		case ProductTypes.CREATE_PRODUCT:
			let newState = [...state.products, action.product];
			return {...state, products: newState}
		case ProductTypes.SET_CATEGORY:
			return {...state, category: action.payload.category};
		case ProductTypes.SET_MIN_PRICE:
			return {...state, minPrice: action.payload.min_price};
		case ProductTypes.SET_MAX_PRICE:
			return {...state, maxPrice: action.payload.max_price};
		case ProductTypes.SET_KEYWORD:
			return {...state, keyword: action.payload.keyword};
		default:
			return state
	}
}
