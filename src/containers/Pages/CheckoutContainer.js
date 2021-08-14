import React from "react";
import Container from "@material-ui/core/Container";
import { Checkout } from "../../Components";

const CheckoutContainer = ({
  cart,
  removeFromCart,
  generateToken,
  checkoutToken,
  captureCheckout,
  getOrderData,
}) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ maxWidth: "950px", margin: "auto" }}>
        <Checkout
          checkoutToken={checkoutToken}
          captureCheckout={captureCheckout}
          getOrderData={getOrderData}
        />
      </main>
    </Container>
  );
};

export default CheckoutContainer;
