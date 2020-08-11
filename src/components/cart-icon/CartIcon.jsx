import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/original.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { getItemCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingCart className="shopping-cart" />
      <span className="cart-counter">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: getItemCount,
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
