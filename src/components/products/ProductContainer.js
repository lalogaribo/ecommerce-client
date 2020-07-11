import React, { useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {fetchAllProducts} from "../../redux/products/products.actions";
import ProductItem from "./ProductItem";
import SideBar from "../shared/SideBar";
import Spinner from "../shared/Spinner";
import "./products.css";
import {createStructuredSelector} from "reselect";
import {selectIsLoading, selectProductsItems} from "../../redux/products/products.selector";

function ProductContainer({user, products, isLoading, fetchAllProducts}) {

	useEffect(() => {
		if(!products.length) {
			fetchAllProducts()
		}
	}, []);

	return (
		<div className="main-container">
			<div className="sidebar">
				<SideBar/>
			</div>
			<div className="card-items">
				{isLoading ? (
					<Spinner/>
				) : (
					<>
						{products.map((product) => {
							return (
								<Fragment key={product.id}>
									{
										<ProductItem
											key={product.id}
											product={product}
											user={user}
										/>
									}
								</Fragment>
							);
						})}
						{products.length === 0 && (
							<h1>No items were found</h1>
						)}
					</>
				)}
			</div>
		</div>
	);
}


const mapStateToProps = createStructuredSelector({
	products: selectProductsItems,
	isLoading: selectIsLoading
})

export default connect(mapStateToProps, {fetchAllProducts})(ProductContainer);
