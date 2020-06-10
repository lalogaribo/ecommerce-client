import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = (item) => (
  <a>
    <Icon name="money" />
    {item}
  </a>
);

const ProductItem = ({
  product: { id, name, description, price, time_to_make, image },
  product,
  user,
}) => {
  return (
    <div className="product-card">
      <Link
        to={{
          pathname: `/products/${id}`,
          state: {
            product: product,
          },
        }}
      >
        <Card
          image={image}
          header={name}
          meta={`Estimation days: ${time_to_make} `}
          description={description}
          extra={extra(price)}
        />
      </Link>
      {product.user_id === user.user.id && (
        <Link
          to={{
            pathname: `/users/${user.user.id}/products/${id}`,
            state: {
              product: product,
            },
          }}
        >
          Edit item
        </Link>
      )}
    </div>
  );
};

export default ProductItem;
