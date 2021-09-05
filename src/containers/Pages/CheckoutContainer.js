import React from "react";
import Container from "@material-ui/core/Container";
import { Checkout, Banner } from "../../Components";

const CheckoutContainer = ({
  cart,
  removeFromCart,
  generateToken,
  checkoutToken,
  checkoutData,
  captureCheckout,
  paymentResults,
  getOrderData,
  emptyCart,
  products,
}) => {
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ margin: "auto" }}>
        <Checkout
          checkoutToken={checkoutToken}
          captureCheckout={captureCheckout}
          getOrderData={getOrderData}
          emptyCart={emptyCart}
          checkoutData={checkoutData}
          paymentResults={paymentResults}
        >
          <Banner
            title="Ralated Products"
            numOfProds={4}
            xs={3}
            products={products}
          />
        </Checkout>
      </main>
    </Container>
  );
};

export default CheckoutContainer;
