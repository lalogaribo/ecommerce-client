import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/products";
import ProductItem from "./ProductItem";
import SideBar from "../shared/SideBar";
import Spinner from "../shared/Spinner";
import "./products.css";

function ProductContainer({ user, getAllProducts, productsStore }) {
  const [loadProducts, setLoadProducts] = useState(false);
  const [allProducts, setProducts] = useState([]);
  const { products, isLoading } = productsStore;

  useEffect(() => {
    let productos = localStorage.getItem("products");
    if (!productos) {
      getAllProducts();
      setProducts(products);
    } else {
      setProducts(JSON.parse(productos));
    }
  }, []);

  return (
    <div className="main-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="card-items">
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            {products.map((product) => {
              return (
                <>
                  {
                    <ProductItem
                      key={product.id}
                      product={product}
                      user={user}
                    />
                  }
                </>
              );
            })}
            {productsStore.products.length === 0 && (
              <h1>No items were found</h1>
            )}
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
