import React, { Component } from "react";
import { connect } from "react-redux";
function Home(props) {
  return (
    <div>
      <h2>Home page</h2>
      Welcome {props.user.user.first_name}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Home);
