import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/";
import Cart from "./containers/Pages/CartContainer";
import Checkout from "./containers/Pages/CheckoutContainer";
import Home from "./containers/Pages/HomeContainer";
import ProductContainer from "./containers/Pages/ProductContainer";
import { commerce } from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});
  // const [orderData, setOrderData] = useState(false);
  const [checkoutToken, setCheckoutToken] = useState(false);

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify({ name: "Funda", age: 1 }));
  // }, []);

  const addToCart = (productId, vgrpId, optnId) => {
    commerce.cart
      .add(productId, 1, { [vgrpId]: optnId })
      .then(({ cart }) => setCart(cart, console.log(cart, "AddToCart Cart")));
  };

  const removeFromCart = (id) => {
    commerce.cart
      .remove(id)
      .then(({ cart }) => setCart(cart, console.log(cart, "removeCart")));
  };

  const decrementCart = (id, qty) => {
    commerce.cart
      .update(id, { quantity: qty })
      .then(({ cart }) => setCart(cart, console.log(cart, "removeCart")));
  };

  const generateToken = (id) => {
    commerce.checkout
      .generateTokenFrom("cart", id)
      .then((checkout) =>
        setCheckoutToken(
          checkout,
          localStorage.setItem("cart", JSON.stringify(cart)),
          console.log(checkout, "checkout.id")
        )
      );
  };

  // const getOrderData = (data) => {
  //   // setOrderData(data);
  //   console.log("OrderData");
  // };

  const captureCheckout = (data, id) => {
    console.log(data, id, "CaptureCheckout");
  };

  return (
    <Router>
      <Header cart={cart} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <h1 style={{ marginTop: `${76 + 8 + 8}px` }}>Login</h1>
        </Route>
        <Route path="/product/:slug/:id">
          <ProductContainer
            cart={cart}
            addToCart={addToCart}
            decrementCart={decrementCart}
          />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            generateToken={generateToken}
          />
        </Route>
        <Route path="/checkout">
          <Checkout
            cart={cart}
            checkoutToken={checkoutToken}
            // getOrderData={getOrderData}
            captureCheckout={captureCheckout}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
