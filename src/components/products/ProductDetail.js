import React from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import { ADD_ITEM_TO_CART } from "../../actiontypes";
import { Link } from "react-router-dom";
import AdminLinks from "../shared/AdminLinks";

const ProductDetail = (props) => {
  console.log(props.user);
  const { isLoggedIn } = props.user;
  const {
    name,
    description,
    price,
    image,
    quantity,
    id,
    user_id,
  } = props.location.state.product;
  return (
    <div className="product-detail-container">
      <Item.Group>
        <Item>
          <Item.Image size="large" src={image} />
          <Item.Content>
            <Item.Header as="a">{name}</Item.Header>
            <Item.Meta>{description}</Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>${price}</Item.Extra>
            <Item.Extra>{quantity} in stock</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      {props.user.isLoggedIn &&
        props.user.user.is_admin &&
        props.user.user.id === props.location.state.product.user_id && (
          <AdminLinks product={props.location.state.product} />
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
      {props.cart.cart.length > 0 && <Link to="/cart">My cart</Link>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log
//   return {
//     addItemToCart: () => dispatch({ type: ADD_ITEM_TO_CART, payload }),
//   };
// };

export default connect(mapStateToProps)(ProductDetail);
