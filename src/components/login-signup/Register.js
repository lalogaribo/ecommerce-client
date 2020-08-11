import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { signUp } from "../../redux/user/user.actions";
import * as Yup from "yup";
import "./login.css";
import CustomForm from "../forms/CustomForm";
import CustomFormField from "../forms/CustomFormField";
import SubmitButton from "../forms/SubmitButton";

const validSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string().required("Password is required").label("Password"),
  password_confirmation: Yup.string()
    .required("Confirm password is required")
    .label("Confirm password"),
  first_name: Yup.string()
    .required("First name is required")
    .label("First Name"),
  last_name: Yup.string().required("Last name is required").label("Last Name"),
});
function Register({ signUp, history }) {
  return (
    <div className="row form_cont">
      <div className="col-8">
        <img
          src={process.env.PUBLIC_URL + "/img/stickerbanner.png"}
          className="login-img"
        />
      </div>
      <div className="col-4">
        <CustomForm
          onSubmit={({
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
          }) =>
            signUp(
              first_name,
              last_name,
              email,
              password,
              password_confirmation,
              history
            )
          }
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={validSchema}
        >
          <CustomFormField
            placeholder="Michael"
            name="first_name"
            label="First Name"
            type="text"
            autoComplete="off"
          />
          <CustomFormField
            placeholder="hadamovish"
            name="last_name"
            label="Last Name"
            type="text"
            autoComplete="off"
          />
          <CustomFormField
            placeholder="example@gmail.com"
            name="email"
            label="Email"
            type="text"
            autoComplete="off"
          />
          <CustomFormField
            placeholder="********"
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
          />
          <CustomFormField
            placeholder="********"
            name="password_confirmation"
            label="Confirm password"
            type="password"
            autoComplete="off"
          />
          Already have an account? <Link to="/login">Sign in instead</Link>
          <SubmitButton title={"Create account"} />
        </CustomForm>
      </div>
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
