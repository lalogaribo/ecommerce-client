import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { resetCart } from "../../redux/cart/cart.actions";

const StripeButton = ({ price, resetCart }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_7nB1qor7TtdQg2rnF2DfOI96";

  const onToken = (token) => {
    console.log(token);
    resetCart();
  };

  return (
    <StripeCheckout
      label="Pay With Card"
      name="GOLD store."
      billingAddress
      shippingAddress
      image="https://cdn11.bigcommerce.com/s-m91f4azz/images/stencil/original/products/2474/9789/Messy_Bun_wm__54672.1502945069.jpg?c=2&imbypass=on"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay With Card"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  resetCart: () => dispatch(resetCart()),
});
export default connect(null, mapDispatchToProps)(StripeButton);
