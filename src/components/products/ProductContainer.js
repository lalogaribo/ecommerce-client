import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Products from "../../services/Products";
import ProductItem from "./ProductItem";
import "./products.css";
import Spinner from "../shared/Spinner";

function ProductContainer({ user }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Products.products.getAllProducts().then((products) => {
      setLoading(false);
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            {products.map((product) => {
              return (
                <ProductItem key={product.id} product={product} user={user} />
              );
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProductContainer);
