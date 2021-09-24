import React from "react";
import { Cart, GlobalContainer, NewArrivalsBanner } from "../../Components";

const CartContainer = ({ cart, removeFromCart, generateToken, products }) => {
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

      {cart.total_items === 0 && (
        <NewArrivalsBanner products={products} title="Start shopping" />
      )}
    </GlobalContainer>
  );
};

export default CartContainer;
