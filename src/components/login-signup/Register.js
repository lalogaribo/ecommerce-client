import React from "react";
import useForm from "../../hooks/useForm";
import signUpFormValidation from "../../services/signUpFormValidations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { signUp } from "../../actions/signIn";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  password_confirmation: "",
  first_name: "",
  last_name: "",
};

function Register(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, signUpFormValidation, loginSubmit);

  function loginSubmit() {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    } = values;

    props.signUp(
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      props.history
    );
  }
  return (
    <div className="form-container">
      <h2>Create an account, it's free :)</h2>
      <span className="span-title">
        You don’t think you should login first and behave like human not robot.
      </span>
      <form onSubmit={handleSubmit} className="ui form">
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
        <br />
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
        <br />
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
        <br />
        <input
          type="password"
          placeholder="Set password"
          name="password"
          className={errors.password && "error-input"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
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
        <br />
        {errors.password_confirmation && (
          <p className="error-text">{errors.password_confirmation}</p>
        )}
        <br />
        Already have an account? <Link to="/login">Sign in instead</Link>
        <br />
        <button type="submit" value="Submit">
          Create account
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      history
    ) => {
      dispatch(
        signUp(
          first_name,
          last_name,
          email,
          password,
          password_confirmation,
          history
        )
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Register));
