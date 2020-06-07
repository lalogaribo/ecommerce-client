import React from "react";
import useForm from "../../hooks/useForm";
import signUpFormValidation from "../../services/signUpFormValidations";
import { connect } from "react-redux";
import axios from "axios";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  password_confirmation: "",
  first_name: "",
  last_name: "",
};

function Register() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, signUpFormValidation, loginSubmit);

  function loginSubmit() {
    axios
      .post("http://localhost:3001/api/v1/signup", {
        user: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        },
      })
      .then((res) => res.data)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }
  return (
    <div className="form-container">
      <h2>Create an account, it's free :)</h2>
      <span className="span-title">
        You don’t think you should login first and behave like human not robot.
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="first_name"
          value={values.first_name}
          className={errors.first_name && "error-input"}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        {errors.first_name && <p className="error-text">{errors.first_name}</p>}
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          value={values.last_name}
          className={errors.last_name && "error-input"}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        {errors.last_name && <p className="error-text">{errors.last_name}</p>}
        <input
          type="text"
          placeholder="Email address"
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          type="password"
          placeholder="Set password"
          name="password"
          className={errors.password && "error-input"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.password && <p className="error-text">{errors.password}</p>}
        <br />
        <input
          type="password"
          placeholder="Set password"
          name="password_confirmation"
          className={errors.password_confirmation && "error-input"}
          value={values.password_confirmation}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.password_confirmation && (
          <p className="error-text">{errors.password_confirmation}</p>
        )}
        <button type="submit" value="Submit">
          Create account
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Register);
