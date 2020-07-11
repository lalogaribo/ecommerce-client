import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CartIcon from "../cart-icon/CartIcon";

import "./navbar.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
import {logOutUser} from "../../redux/user/user.actions";

const Header = ({ hidden, currentUser, history, logOutUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      GOLD store
    </Link>
    <div className="options">
      <Link className="option" to="/products">
        Products
      </Link>
      <Link className="option" to="/about-us">
        About Us
      </Link>
      {currentUser ? (
        <Link
          className="option"
          onClick={() => {
            localStorage.removeItem("jwt");
            history.push("/login");
            // window.location.reload();
            logOutUser()
          }}
        >
          Logout
        </Link>
      ) : (
        <Link className="option" to="/login">
          Login
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

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
