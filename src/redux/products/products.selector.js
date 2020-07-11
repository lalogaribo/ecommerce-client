import {createSelector} from 'reselect'

const selectProducts = (state) => state.products;

export const selectProductsItems = createSelector(
	[selectProducts],
	(products) => products.products
)

export const selectIsLoading = createSelector(
	[selectProducts],
	(products) => products.isLoading
)
