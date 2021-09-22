import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./Components/";
import Cart from "./containers/Pages/CartContainer";
import CheckoutContainer from "./containers/Pages/CheckoutContainer";
import HomeContainer from "./containers/Pages/HomeContainer";
import ProductContainer from "./containers/Pages/ProductContainer";
import QueryContainer from "./containers/Pages/QueryContainer";
import SPHelpContainer from "./containers/Pages/SPHelpContainer";
import { commerce } from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});
  const [checkoutData, setCheckoutData] = useState(false);
  const [checkoutToken] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortedProducts, SetSortedProducts] = useState([]);
  const [query, SetQuery] = useState("");
  const [paymentResults, SetPaymentResults] = useState(false);
  const [paymentError, SetPaymentError] = useState(false);
  const [product, setProduct] = useState(false);
  const [isCartUpdating, SetIsCartUpdating] = useState({
    state: true,
    name: "",
  });

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
    commerce.products.list().then((product) => {
      setProducts(product.data, console.log(product.data, "product.data"));
    });
  }, []);

  const getProduct = (id) => {
    setProduct(false);
    commerce.products.retrieve(id).then((product) => {
      setProduct(product);
      // setRecentlyViewed((oldArray) => [...oldArray, product]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const searchProducts = (query) => {
    let currProd = [];
    products.forEach((res) => {
      if (res.seo.title && res.name.includes(query)) {
        currProd.push(res);
      }
    });
    SetSortedProducts(currProd);
    SetQuery(query);
  };

  const addToCart = (productId, vgrpId, optnId, name) => {
    SetIsCartUpdating({ state: true, name });
    commerce.cart.add(productId, 1, { [vgrpId]: optnId }).then(({ cart }) => {
      setCart(cart, console.log(cart, "AddToCart Cart"));
      SetIsCartUpdating({ state: false, name: "" });
    });
  };

  const removeFromCart = (id) => {
    commerce.cart
      .remove(id)
      .then(({ cart }) => setCart(cart, console.log(cart, "removeCart")));
  };

  const decrementCart = (id, qty, name) => {
    SetIsCartUpdating({ state: true, name });
    commerce.cart.update(id, { quantity: qty }).then(({ cart }) => {
      setCart(cart, console.log(cart, "removeCart"));
      SetIsCartUpdating({ state: false, name: "" });
    });
  };

  const generateToken = (id) => {
    commerce.checkout
      .generateTokenFrom("cart", id)
      .then((checkout) =>
        setCheckoutData(
          checkout,
          localStorage.setItem(
            "checkoutData",
            JSON.stringify(checkout),
            console.log(checkout, "checkout")
          )
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
      .then(({ customer, order_value }) => {
        SetPaymentResults({ customer, order_value });
        emptyCart();
        localStorage.clear();
        // console.log(customer, order_value, "customer, order_value");
      })
      .catch(({ data }) => {
        SetPaymentError({ data });
        // console.error(data);
      });
  };

  const emptyCart = () => {
    commerce.cart.empty().then((response) => {
      setCart(response);
      // console.log(response, "response empty()");
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <Header cart={cart} searchProducts={searchProducts} />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/product/:slug/:id" exact>
          <ProductContainer
            cart={cart}
            getProduct={getProduct}
            product={product}
            addToCart={addToCart}
            decrementCart={decrementCart}
            isCartUpdating={isCartUpdating}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            generateToken={generateToken}
          />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutContainer
            cart={cart}
            checkoutToken={checkoutToken}
            getOrderData={getOrderData}
            captureCheckout={captureCheckout}
            checkoutData={checkoutData}
            emptyCart={emptyCart}
            products={products}
            paymentResults={paymentResults}
            paymentError={paymentError}
          />
        </Route>
        <Route path="/search/:name" exact>
          <QueryContainer
            sortedProducts={sortedProducts}
            query={query}
            searchProducts={searchProducts}
          />
        </Route>
        <Route path="/sp-help">
          <SPHelpContainer />
        </Route>
        <Route path="*">
          <Route render={() => <Redirect to="/" />} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
