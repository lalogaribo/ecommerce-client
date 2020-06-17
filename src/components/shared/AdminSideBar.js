import React from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../../actions/products";
import { connect } from "react-redux";
import "./shared.css";

function AdminSideBar() {
  return (
    <div>
      <Link to="/">
        <button className="sidebar-option">Go to my listings</button>
      </Link>
      <Link to="/new-product">
        <button className="sidebar-option">Create product</button>
      </Link>
      <button className="sidebar-option">Categories</button>
      <button className="sidebar-option">Coupons</button>
    </div>
  );
}

export default connect(null)(AdminSideBar);
