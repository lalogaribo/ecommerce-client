import React, {useEffect} from "react";
import {ADD_ITEM_TO_CART} from "../../actiontypes";
import {Item} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchProductById} from "../../redux/products/products.actions";
import AdminLinks from "../shared/AdminLinks";

const ProductDetail = (props) => {
		const {isLoggedIn, is_admin, id} = props.user;

		useEffect(() => {
			const {id} = props.match.params
			props.fetchProductById(id)
		}, [])

		const {product} = props
		console.log(product)
		return (
			<>
				{product ? (<div className="product-detail-container">
						<Item.Group>
							<Item>
								<Item.Image size="large" src={product.product.image}/>
								<Item.Content>
									<Item.Header as="a">{product.product.name}</Item.Header>
									<Item.Meta>{product.product.description}</Item.Meta>
									<Item.Description>{product.product.description}</Item.Description>
									<Item.Extra>${product.product.price}</Item.Extra>
									<Item.Extra>{product.product.quantity} in stock</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
						{isLoggedIn &&
						is_admin &&
						id === props.location.state.product.user_id && (
							<AdminLinks product={props.location.state.product}/>
						)}
						{isLoggedIn && (
							<button
								onClick={() => {
									props.dispatch({
										type: ADD_ITEM_TO_CART,
										payload: props.location.state.product,
									});
								}}
							>
								Add cart
							</button>
						)}
					</div>
				) : <h1>Loading product...</h1>
				}
				{props.cart.cart.length > 0 && <Link to="/checkout">My cart</Link>}
			</>
		);
	}
;

const mapStateToProps = (state, ownProps) => {
	return {user: state.user, cart: state.cart, product: state.products.product};
};

export default connect(mapStateToProps, {fetchProductById})(ProductDetail);
