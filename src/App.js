import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Header, ScrollToTop } from "./Components/";
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
  const [products, setProducts] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [paymentResults, SetPaymentResults] = useState(false);
  const [paymentError, SetPaymentError] = useState(false);
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productError, setProductError] = useState({
    state: false,
    message: "",
  });
  const [isCartUpdating, setIsCartUpdating] = useState({
    state: true,
    name: "",
  });

  useEffect(() => {
    setLoading(true);
    commerce.cart.retrieve().then((cart) => setCart(cart));
    commerce.products
      .list()
      .then((product) => {
        setLoading(false);
        setProducts(product.data, console.log(product.data, "product.data"));
      })
      .catch(({ data }) => {
        setLoading(false);
        console.error(data, "DATA");
      });
  }, []);

  const getProduct = (id) => {
    setLoading(true);
    setProduct(false);
    setProductError({ state: false });
    commerce.products
      .retrieve(id)
      .then((product) => {
        setProduct(product);
        setLoading(false);
        // setRecentlyViewed((oldArray) => [...oldArray, product]);
      })
      .catch(({ data }) => {
        setLoading(false);
        setProductError({ state: true, message: data.error.message });
        // console.error(data, "DATA");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const searchProducts = (query) => {
    if (!products) return;
    let currProd = [];
    products.forEach((res) => {
      if (res.seo.title && res.name.includes(query)) {
        currProd.push(res);
      }
    });
    setSortedProducts(currProd);
    setQuery(query);
  };

  const addToCart = (productId, vgrpId, optnId, name) => {
    setLoading(true);
    setIsCartUpdating({ state: true, name });
    commerce.cart
      .add(productId, 1, { [vgrpId]: optnId })
      .then(({ cart }) => {
        setLoading(false);
        setCart(cart, console.log(cart, "AddToCart Cart"));
        setIsCartUpdating({ state: false, name: "" });
      })
      .catch(({ data }) => {
        setLoading(false);
      });
  };

  const removeFromCart = (id) => {
    commerce.cart
      .remove(id)
      .then(({ cart }) => setCart(cart, console.log(cart, "removeCart")));
  };

  const decrementCart = (id, qty, name) => {
    setIsCartUpdating({ state: true, name });
    commerce.cart.update(id, { quantity: qty }).then(({ cart }) => {
      setCart(cart, console.log(cart, "removeCart"));
      setIsCartUpdating({ state: false, name: "" });
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
      <Header loading={loading} cart={cart} searchProducts={searchProducts} />
      <Switch>
        <Route exact path="/">
          <HomeContainer products={products} searchProducts={searchProducts} />
        </Route>
        <Route path="/product/:slug/:id" exact>
          <ProductContainer
            cart={cart}
            loading={loading}
            productError={productError}
            getProduct={getProduct}
            product={product}
            addToCart={addToCart}
            decrementCart={decrementCart}
            products={products}
            isCartUpdating={isCartUpdating}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cart={cart}
            products={products}
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
            products={products}
            searchProducts={searchProducts}
          />
        </Route>
        <Route path="/sp-help">
          <SPHelpContainer searchProducts={searchProducts} />
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
