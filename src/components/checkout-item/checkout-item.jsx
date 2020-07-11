import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  removeItem,
  decreaseItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem }) => {
  const { name, price, image, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#x2716;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
