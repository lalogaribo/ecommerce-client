export const updateProduct = (state, productId, data) => {
	let updatedProducts = state.products.map(product => {
		return product.id === productId ? product = data : product
	})
	return updatedProducts
}
