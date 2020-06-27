import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./navbar.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
// import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";

const Header = ({ hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      {/* <Logo className="logo" /> */}
    </Link>
    <div className="options">
      <Link className="option" to="/products">
        Products
      </Link>
      <Link className="option" to="/shop">
        About Us
      </Link>
      {false ? (
        <div className="option">SIGN OUT</div>
      ) : (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  // currentUser: true,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
