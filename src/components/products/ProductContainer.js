import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/products";
import ProductItem from "./ProductItem";
import Spinner from "../shared/Spinner";
import "./products.css";

function ProductContainer({ user, getAllProducts, productsStore }) {
  const [loadProducts, setLoadProducts] = useState(false);
  const { products, isLoading } = productsStore;
  useEffect(() => {
    if (productsStore.products.length === 0) {
      setLoadProducts(true);
      getAllProducts();
    }
  }, [loadProducts]);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {isLoading ? (
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
  return { user: state.user, productsStore: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => {
      dispatch(getAllProducts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
