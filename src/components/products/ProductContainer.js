import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../redux/products/products.actions";
import SideBar from "../shared/SideBar";
import Spinner from "../shared/Spinner";
import "./products.css";
import { createStructuredSelector } from "reselect";
import {
  selectIsLoading,
  selectProductsItems,
} from "../../redux/products/products.selector";
import ProductCard from "./ProductCard";

function ProductContainer({ products, isLoading, fetchAllProducts }) {
  useEffect(() => {
    if (products.length < 1) {
      fetchAllProducts();
    }
  }, []);

  return (
    <div className="main-container">
      <div className="sidebar">
        <SideBar />
      </div>
      {isLoading && <Spinner />}
      <div className="card-items">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Fragment key={product.id}>
                <ProductCard product={product} />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  products: selectProductsItems,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, { fetchAllProducts })(ProductContainer);
