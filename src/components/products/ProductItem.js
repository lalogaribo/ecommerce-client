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
  product: { id, name, description, price, time_to_make },
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
          image="https://images.unsplash.com/photo-1575540325855-4b5d285a3845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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
