import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
  const { path, user, component: Component, render } = props;

  return (
    <Route
      path={path}
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
