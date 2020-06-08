import React, { useState, useEffect, Fragment } from "react";
import Products from "../../services/Products";
import ProductItem from "./ProductItem";
import "./products.css";
import { Loader } from "semantic-ui-react";

export default function ProductContainer() {
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
          <Loader />
        ) : (
          <Fragment>
            {products.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
}
