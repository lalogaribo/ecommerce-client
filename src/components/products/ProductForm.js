import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Type from "../../services/Type";
import { productCreation } from "../../redux/products/products.actions";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";
import * as Yup from "yup";
import AdminSideBar from "../shared/AdminSideBar";
import CustomForm from "../forms/CustomForm";
import CustomFormField from "../forms/CustomFormField";
import CustomButton from "../custom-button/CustomButton";
import Select from "../shared/select";

const validSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "5 chars is the minimum value")
    .max(255, "Only 255 characters are allowed")
    .label("Name"),
  description: Yup.string()
    .required("Description is required")
    .min(5, "5 chars is the minimum value")
    .max(255, "Only 255 characters are allowed")
    .label("Description"),
  price: Yup.number("Only numbers are allowed")
    .min(1, "Price must be at least 1")
    .required("Price is required")
    .label("Price"),
  quantity: Yup.number("Only numbers are allowed")
    .min(1, "Quantity must be at least 1")
    .required("Quantity is required")
    .label("Quantity"),
  time_to_make: Yup.number("Only numbers are allowed")
    .min(1, "Time to make must be at least 1")
    .required("Time is required")
    .label("Time"),
  image: Yup.string().required("Image is required").label("Image"),
});

function ProductForm({ productCreation, currentUser }) {
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

  //
  // function createProduct() {
  //   values.type_id = typeId;
  //   productCreation(values, adminHeaders, currentUser.user.id, adminHeaders);
  // }

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
        <CustomForm
          initialValues={{
            name: "",
            quantity: "",
            price: "",
            time_to_make: "",
            description: "",
            image: "",
          }}
          validationSchema={validSchema}
        >
          <CustomFormField name="name" placeholder="Cellphone" label="Name" />
          <CustomFormField
            name="description"
            placeholder="Description..."
            label="Description"
          />
          <CustomFormField
            name="quantity"
            placeholder="Quantity.."
            label="Quantity"
          />
          <CustomFormField
            name="time_to_make"
            placeholder="2 days"
            label="Estimate time"
          />
          <CustomFormField name="price" placeholder="$200.00" label="Price" />
          {!types.length ? (
            <p>Loading categories...</p>
          ) : (
            <Select options={types} />
          )}
          <CustomFormField
            name="image"
            placeholder="Upload image"
            label="Image"
          />
          <CustomButton>Create product</CustomButton>
        </CustomForm>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user,
  };
};

export default connect(mapStateToProps, { productCreation })(ProductForm);
