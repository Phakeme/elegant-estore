import React from "react";
import { Container } from "@material-ui/core";
import { Cart } from "../../Components";

const CartContainer = ({ cart, removeFromCart, generateToken }) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Cart cart={cart} removeFromCart={removeFromCart} generateToken={generateToken} />
    </Container>
  );
};

export default CartContainer;
