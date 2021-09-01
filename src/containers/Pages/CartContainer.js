import React from "react";
import { Cart, GlobalContainer } from "../../Components";

const CartContainer = ({ cart, removeFromCart, generateToken }) => {
  // <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
  return (
    <GlobalContainer>
      <main style={{ margin: "auto" }}>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          generateToken={generateToken}
        />
      </main>
    </GlobalContainer>
  );
};

export default CartContainer;
