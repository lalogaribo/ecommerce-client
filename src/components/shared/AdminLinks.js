import React from "react";
import { Link } from "react-router-dom";

export default function AdminLinks({ product }) {
  return (
    <div>
      <Link
        to={{
          pathname: `/users/${product.user_id}/products/${product.id}`,
          state: {
            product: product,
          },
        }}
      >
        Edit item
      </Link>
      <button>Delete product</button>
    </div>
  );
}
