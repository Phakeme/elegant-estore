import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import { Cart } from "../../Components";

const CartContainer = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
  }, []);

  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Cart cart={cart} />
    </Container>
  );
};

export default CartContainer;
