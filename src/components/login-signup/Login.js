import React from "react";
import { signIn } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./login.css";
import * as Yup from "yup";

import CustomForm from "../forms/CustomForm";
import CustomFormField from "../forms/CustomFormField";
import SubmitButton from "../forms/SubmitButton";

const validSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string().required("Password is required").label("Password"),
});

function Login({ signIn, history }) {
  function submitLogin(email, password) {
    signIn(email, password, history);
  }
  return (
    <div className="row">
      <div className="col-8">
        <img
          src={process.env.PUBLIC_URL + "/img/stickerbanner.png"}
          className="login-img"
        />
      </div>

      <div className="col-4">
        <CustomForm
          validationSchema={validSchema}
          onSubmit={(values) => submitLogin(values.email, values.password)}
          initialValues={{ email: "", password: "" }}
        >
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
          You are new? <Link to="/signup">Create account</Link>
          <SubmitButton title={"Login"} />
        </CustomForm>
      </div>
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
