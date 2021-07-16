import React, { useEffect } from "react";
import { commerce } from "../../../lib/commerce";

const Cart = () => {
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => console.log(cart, "CART"));
  }, []);
  return <div></div>;
};

export default Cart;
