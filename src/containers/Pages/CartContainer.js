import React from "react";
import { Container } from "@material-ui/core";
import { Cart } from "../../Components";

const CartContainer = ({ cart }) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Cart cart={cart} />
    </Container>
  );
};

export default CartContainer;
