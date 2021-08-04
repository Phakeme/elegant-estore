import React from "react";
import { Container } from "@material-ui/core";
import { Checkout } from "../../Components";

const CheckoutContainer = ({ cart, removeFromCart, generateToken }) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ maxWidth: "950px", margin: "auto" }}>
        <Checkout />
      </main>
    </Container>
  );
};

export default CheckoutContainer;
