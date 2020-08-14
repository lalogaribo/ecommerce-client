import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { name, price, image, quantity } }) => (
  <div className="cart-item hvr-grow">
    <img src={image} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
