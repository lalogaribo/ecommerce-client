import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_7nB1qor7TtdQg2rnF2DfOI96";

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
    />
  );
};

export default StripeButton;
