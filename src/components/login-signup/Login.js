import React from "react";
import validateForm from "../../services/validateForm";
import useForm from "../../hooks/useForm";
import { connect } from "react-redux";
import axios from "axios";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

function Login() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateForm, loginSubmit);

  function loginSubmit() {
    axios
      .post("http://localhost:3001/api/v1/login", {
        user: {
          email: values.email,
          password: values.password,
        },
      })
      .then((res) => res.data)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <span className="span-title">
        You don’t think you should login first and behave like human not robot.
      </span>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Login);
