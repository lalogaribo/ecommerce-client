import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CartIcon from "../cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./navbar.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";

const Header = ({ hidden, currentUser, history }) => (
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
      {currentUser ? (
        <Link
          className="option"
          onClick={() => {
            localStorage.removeItem("jwt");
            history.push("/login");
            window.location.reload();
          }}
        >
          SIGN OUT
        </Link>
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
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default withRouter(connect(mapStateToProps)(Header));
