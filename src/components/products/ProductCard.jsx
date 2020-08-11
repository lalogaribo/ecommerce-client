import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProductCard = (props) => {
  const { image, description, name, price, quantity, id } = props.product;
  const { current_user } = props;
  const { user: loggedUser } = props.current_user;
  const addToCart = () => {
    if (current_user.isLoggedIn && loggedUser.id !== props.product.user_id)
      return <button disabled>Add to cart</button>;
  };
  return (
    <div className="card card-item">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <Link to={`/products/${id}`}>{name}</Link>
        <p className="card-text">{description}</p>
        <p style={{ textDecoration: quantity >= 1 ? "none" : "line-through" }}>
          {" "}
          {quantity >= 1 ? `In stock: ${quantity}` : "Not available"}
        </p>
        <p> Price: ${price}</p>
        {addToCart()}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { current_user: state.user };
};
export default connect(mapStateToProps)(ProductCard);
