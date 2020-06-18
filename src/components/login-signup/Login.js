import React, { useState } from "react";
import validateForm from "../../services/validateForm";
import { signIn } from "../../actions/signIn";
import useForm from "../../hooks/useForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateForm, submitLogin);

  function submitLogin() {
    props.signIn(values.email, values.password, props.history);
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <img
            src={process.env.PUBLIC_URL + "/img/stickerbanner.png"}
            className="login-img"
          />
        </Grid>
        <Grid item xs={3} style={{ margin: "auto" }}>
          <Typography variant="subtitle1" gutterBottom>
            <h1 className="header">Login</h1>
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email address"
              name="email"
              value={values.email}
              className={errors.email && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
              id="input"
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
              id="input"
            />{" "}
            {errors.password && <p className="error-text">{errors.password}</p>}
            <br />
            You are new? <Link to="/signup">Create account</Link>
            <br />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, history) => {
      dispatch(signIn(email, password, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
