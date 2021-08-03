import React from "react";
import Container from "@material-ui/core/Container";
import { Cart } from "../../Components";

const CartContainer = ({ cart, removeFromCart, generateToken }) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ maxWidth: "950px", margin: "auto" }}>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          generateToken={generateToken}
        />
      </main>
    </Container>
  );
};

export default CartContainer;
