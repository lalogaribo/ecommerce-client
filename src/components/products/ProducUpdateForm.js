import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import validateProduct from "../../services/validateProduct";
import useForm from "../../hooks/useForm";
import Type from "../../services/Type";
import {productUpdate} from "../../redux/products/products.actions";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";
import AdminSideBar from "../shared/AdminSideBar";

function ProductUpdateForm({ productUpdate, history, location, currentUser }) {
  const adminHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("jwt"),
  };

  const {
    name,
    quantity,
    price,
    time_to_make,
    description,
    image,
    user_id,
    id,
  } = location.state.product;
  const INITIAL_STATE = {
    name,
    quantity,
    price,
    time_to_make,
    description,
    image,
  };

  const [value, setValue] = useState("");
  const [typeId, setTypeId] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    Type.types.getTypes().then((types) => {
      setTypes(types.data);
    });
  }, []);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateProduct, updateProduct);

  function updateProduct() {
    values.type_id = typeId
    console.log(values)
    productUpdate(values, adminHeaders, currentUser, id, history)
  }

  function handleSelect(event) {
    let selectedType = types.find((type) => type.name === event.target.value);
    setTypeId(selectedType.id);
    setValue(event.target.value);
  }

  return (
    <div className="main-container">
      <div className="sidebar">
        <AdminSideBar />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} id="form-container">
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={values.name}
            className={errors.name && "error-input"}
            onChange={handleChange}
            onBlur={handleBlur}
            id="inputs"
          />{" "}
          <br />
          {errors.name && <p className="error-text">{errors.name}</p>}
          <textarea
            type="text"
            placeholder="Description..."
            name="description"
            value={values.description}
            className={errors.description && "error-input"}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            cols="50"
          />{" "}
          <br />
          {errors.description && (
            <p className="error-text">{errors.description}</p>
          )}
          <div className="options">
            <input
              type="text"
              placeholder="Quantity..."
              name="quantity"
              value={values.quantity}
              className={errors.quantity && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <br />
            {errors.quantity && <p className="error-text">{errors.quantity}</p>}
            <input
              type="text"
              placeholder="Time to make..."
              name="time_to_make"
              value={values.time_to_make}
              className={errors.time_to_make && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <br />
            {errors.time_to_make && (
              <p className="error-text">{errors.time_to_make}</p>
            )}
          </div>
          <div className="options">
            <input
              type="text"
              placeholder="Set price"
              name="price"
              value={values.price}
              className={errors.price && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <br />
            {errors.price && <p className="error-text">{errors.price}</p>}
            <br />
            <input
              type="text"
              placeholder="Image..."
              name="image"
              value={values.image}
              className={errors.image && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            <br />
            {errors.image && <p className="error-text">{errors.image}</p>}
          </div>
          {types.length > 0 && (
            <>
              <select
                value={value}
                onChange={handleSelect}
                className="ui selection dropdown"
              >
                {types.map((type) => {
                  return <option value={type.name}>{type.name}</option>;
                })}
              </select>
            </>
          )}{" "}
          <br />
          <button type="submit" class="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    currentUser: state.user,
  };
};

export default connect(
  mapStateToProps,
  {productUpdate}
)(withRouter(ProductUpdateForm));
