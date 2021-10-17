import React from "react";
import {
  Cart,
  GlobalContainer,
  NewArrivalsBanner,
  MarginTop,
} from "../../Components";

const CartContainer = ({ cart, removeFromCart, generateToken, products }) => {
  return (
    <GlobalContainer>
      <MarginTop>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          generateToken={generateToken}
        />

        {cart.total_items === 0 && (
          <NewArrivalsBanner products={products} title="Start shopping" />
        )}
      </MarginTop>
    </GlobalContainer>
  );
};

export default CartContainer;
