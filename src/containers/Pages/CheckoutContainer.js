import React from "react";
import Container from "@material-ui/core/Container";
import { Checkout } from "../../Components";

const CheckoutContainer = ({
  cart,
  removeFromCart,
  generateToken,
  checkoutToken,
}) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ maxWidth: "950px", margin: "auto" }}>
        <Checkout checkoutToken={checkoutToken} />
      </main>
    </Container>
  );
};

export default CheckoutContainer;
