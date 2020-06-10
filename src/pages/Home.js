import React from "react";
import ProductItem from "../components/products/ProductItem";
import { connect } from "react-redux";
import "./products.css";
function Home({ user }) {
  return (
    <div>
      <h2>Home page</h2>
      {user.isLoggedIn ? (
        <>
          <h1>Welcome Back {user.user.first_name}</h1>
          <h3>Current listing products</h3>
          <hr />
          <div className="product-container">
            {user.user.products.map((product) => {
              return (
                <ProductItem key={product.id} product={product} user={user} />
              );
            })}
          </div>
        </>
      ) : (
        <h1>Sign in to see your profile</h1>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Home);
