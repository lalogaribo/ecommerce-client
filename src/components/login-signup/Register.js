import React from "react";
import useForm from "../../hooks/useForm";
import signUpFormValidation from "../../services/signUpFormValidations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// import { signUp } from "../../actions/signIn";
import {signUp} from "../../redux/user/user.actions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  password_confirmation: "",
  first_name: "",
  last_name: "",
};

function Register({signUp, history}) {
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

    signUp(
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      history
    );
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
            <h2 className="header">Create account</h2>
          </Typography>
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
            {errors.first_name && (
              <p className="error-text">{errors.first_name}</p>
            )}
            <input
              type="text"
              placeholder="Last name"
              name="last_name"
              value={values.last_name}
              className={errors.last_name && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            {errors.last_name && (
              <p className="error-text">{errors.last_name}</p>
            )}
            <input
              type="text"
              placeholder="Email address"
              name="email"
              value={values.email}
              className={errors.email && "error-input"}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
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
            <input
              type="password"
              placeholder="Confirm password"
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
            <button type="submit" value="Submit">
              Create account
            </button>
            <br />
            Already have an account? <Link to="/login">Sign in instead</Link>
            <br />
          </form>
        </Grid>
      </Grid>
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
