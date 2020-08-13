import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../../redux/products/products.actions";
import { connect } from "react-redux";
import "./shared.css";
import Filters from "./Filters";
import axios from "axios";
const URL = `http://localhost:3001/api/v1`;

const SideBar = ({ getProductsByCategory, user, isLogged }) => {
  const [category, setCategories] = useState([]);
  const [type, setTypes] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(`${URL}/types`);
        setCategories(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCategories();
  }, []);
  const handleChange = (e) => {
    setTypes(e.target.value);
    getProductsByCategory(type);
  };

  return (
    <div className="sidebar">
      {category.length > 0 &&
        category.map((category) => {
          return (
            <Fragment key={category.id}>
              <button
                className="sidebar-buttons"
                name={category.name}
                onClick={handleChange}
                value={category.id}
              >
                {category.name}
              </button>
            </Fragment>
          );
        })}
      {isLogged && user.is_admin && (
        <>
          <Link to="/new-product">
            <button className="sidebar-option">Create product</button>
          </Link>
        </>
      )}
      <Filters />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLogged: state.user.isLoggedIn,
  };
};
export default connect(mapStateToProps, { getProductsByCategory })(SideBar);
