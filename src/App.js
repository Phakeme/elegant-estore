import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/";
import Cart from "./containers/Pages/CartContainer";
import Home from "./containers/Pages/HomeContainer";
import ProductContainer from "./containers/Pages/ProductContainer";
import { commerce } from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => setCart(cart, console.log(cart, "UseEffect Cart")));
  }, []);

  const addToCart = (productId, vgrpId, optnId) => {
    // console.log(productId, vgrpId, optnId, "productId, id, optnId");
    commerce.cart
      .add(productId, 1, { [vgrpId]: optnId })
      .then(({ cart }) => setCart(cart, console.log(cart, "AddToCart Cart")));
  };

  // const removeFromCart = ({ id }) => {
  //   commerce.cart
  //     .remove("item_7RyWOwmK5nEa2V")
  //     .then((response) => console.log(response));
  // };

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
          <ProductContainer cart={cart} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
