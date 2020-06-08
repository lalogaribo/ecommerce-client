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
    </div>
  );
};

export default ProductItem;
