import React from "react";
import { Container } from "@material-ui/core";
import { Cart } from "../Components/";

const CartPage = () => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Cart />
    </Container>
  );
};

export default CartPage;
