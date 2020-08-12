import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CartIcon from "../cart-icon/CartIcon";

import "./navbar.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden, getItemCount } from "../../redux/cart/cart.selector";
import { logOutUser } from "../../redux/user/user.actions";

const Header = ({ hidden, currentUser, history, logOutUser, cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      GOLD store
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/products">
          Products
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about-us">
          About us
        </NavLink>
        {currentUser ? (
          <Link
            className="nav-item nav-link"
            onClick={() => {
              localStorage.removeItem("jwt");
              window.location.reload("/");
              logOutUser();
            }}
          >
            Logout
          </Link>
        ) : (
          <Link className="nav-item nav-link" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
    {cartCount > 0 && <CartIcon />}
    {hidden ? null : <CartDropdown />}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
  cartCount: getItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
