import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { RESET_CART, CALCULATE_TOTAL } from "../../actiontypes";
import "./cart.css";

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: CALCULATE_TOTAL });
  }, [cart, dispatch]);

  const renderCartItems = () => {
    return cart.map((cartItem) => {
      return (
        <>
          <CartItem key={cartItem.name} cartItem={cartItem} />{" "}
          <hr className="line" />{" "}
        </>
      );
    });
  };
  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      {cart.length === 0 ? <h1>Cart is empty</h1> : renderCartItems()}
      <hr className="line" />
      {cart.length > 0 && <h3 className="total">Your total is {total}</h3>}
      {cart.length > 0 && (
        <>
          <button onClick={() => dispatch({ type: RESET_CART })}>
            Clear Cart
          </button>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state.cart;
  return {
    cart,
    total,
  };
};

export default connect(mapStateToProps)(CartContainer);
