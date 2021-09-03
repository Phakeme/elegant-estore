import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./Components/";
import Cart from "./containers/Pages/CartContainer";
import Checkout from "./containers/Pages/CheckoutContainer";
import Home from "./containers/Pages/HomeContainer";
import ProductContainer from "./containers/Pages/ProductContainer";
import QueryContainer from "./containers/Pages/QueryContainer";
import { commerce } from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});
  const [checkoutData, setCheckoutData] = useState(null);
  const [checkoutToken, setCheckoutToken] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortedProducts, SetSortedProducts] = useState([]);
  const [query, SetQuery] = useState("");

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
    commerce.products
      .list()
      .then((product) =>
        setProducts(product.data, console.log(product.data, "product.data"))
      );
  }, []);

  const searchProducts = (query) => {
    let currProd = [];
    products.map((res) => {
      if (res.seo.title && res.name.includes(query)) {
        currProd.push(res);
      }
    });
    SetSortedProducts(currProd);
    SetQuery(query);
    // console.log(sortedProducts, "Sothile");
  };

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
        localStorage.setItem(
          "checkoutData",
          JSON.stringify(checkout),
          console.log(checkout, "checkout")
        )
      );
  };

  const getOrderData = (data) => {
    // localStorage.setItem("orderData", JSON.stringify(data));
    setCheckoutData(data);
  };

  const captureCheckout = (orderData, id) => {
    // console.log(orderData, id, "CaptureCheckout");
    commerce.checkout
      .capture(id, orderData)
      .then((response) => console.log(response));
  };

  const emptyCart = () => {
    commerce.cart.empty().then((response) => console.log(response));
    commerce.cart.refresh().then((cart) => console.log(cart));
  };

  return (
    <Router>
      <ScrollToTop />
      <Header cart={cart} searchProducts={searchProducts} />
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
            getOrderData={getOrderData}
            captureCheckout={captureCheckout}
            emptyCart={emptyCart}
            products={products}
          />
        </Route>
        <Route path="/query">
          <QueryContainer sortedProducts={sortedProducts} query={query} />
        </Route>
      </Switch>
      <Footer />
      <Footer />
    </Router>
  );
}

export default App;
