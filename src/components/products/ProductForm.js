import React, { useState, useEffect } from "react";
import validateProduct from "../../services/validateProduct";
import useForm from "../../hooks/useForm";
import Type from "../../services/Type";
import Products from "../../services/Products";
import Toastr from "../../services/Toastr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";

const INITIAL_STATE = {
  name: "",
  quantity: "",
  price: "",
  time_to_make: "",
  description: "",
  image: "",
};

export default function ProductForm() {
  const adminHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("jwt"),
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
  } = useForm(INITIAL_STATE, validateProduct, createProduct);

  function createProduct() {
    const { name, quantity, price, time_to_make, description, image } = values;
    Products.products
      .createProduct(
        name,
        description,
        price,
        quantity,
        time_to_make,
        image,
        typeId,
        adminHeaders
      )
      .then((product) => {
        if (product.error) {
          Toastr.toast.errorToast(product.error);
          return;
        } else {
          Toastr.toast.successToast("Product created successfully");
        }
      });
  }

  function handleSelect(event) {
    let selectedType = types.find((type) => type.name === event.target.value);
    setTypeId(selectedType.id);
    setValue(event.target.value);
  }

  return (
    <div>
      <ToastContainer />
      <h2>Product form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          name="name"
          value={values.name}
          className={errors.name && "error-input"}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        {errors.name && <p className="error-text">{errors.name}</p>}
        <input
          type="text"
          placeholder="Description..."
          name="description"
          value={values.description}
          className={errors.description && "error-input"}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        {errors.description && (
          <p className="error-text">{errors.description}</p>
        )}
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
        )}
        <br />
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
        <button type="submit" class="button">
          Submit
        </button>
      </form>
    </div>
  );
}