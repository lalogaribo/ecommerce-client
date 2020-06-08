import React, { useState } from "react";
import validateForm from "../../services/validateForm";
import Auth from "../../services/Auth";
import useForm from "../../hooks/useForm";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

function Login(props) {
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateForm, submitLogin);

  function submitLogin() {
    Auth.auth
      .login(values.email, values.password)
      .then((res) => {
        if (res.error) {
          setError(true);
        } else {
          localStorage.setItem("jwt", res.data.token);
          setTimeout(() => {
            props.history.push("/");
          }, 2000);
        }
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <h3>Upss! something went wrong, try again</h3>}
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
        You are new? <Link to="/signup">Create account</Link>
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

export default connect(mapStateToProps)(withRouter(Login));
