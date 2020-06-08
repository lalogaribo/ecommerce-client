import React from "react";
import { Image, Item } from "semantic-ui-react";

const ProductDetail = (props) => {
  console.log(props.location.state);
  const {
    name,
    description,
    price,
    image,
    quantity,
  } = props.location.state.product;
  return (
    <div className="product-detail-container">
      <Item.Group>
        <Item>
          <Item.Image size="large" src={image} />

          <Item.Content>
            <Item.Header as="a">{name}</Item.Header>
            <Item.Meta>{description}</Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>${price}</Item.Extra>
            <Item.Extra>{quantity} in stock</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default ProductDetail;
