import React from "react";
import { Checkout, Banner, GlobalContainer } from "../../Components";

const CheckoutContainer = ({
  cart,
  removeFromCart,
  generateToken,
  checkoutToken,
  checkoutData,
  captureCheckout,
  paymentResults,
  paymentError,
  getOrderData,
  emptyCart,
  products,
  loading,
}) => {
  return (
    <GlobalContainer style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ margin: "auto" }}>
        <Checkout
          checkoutToken={checkoutToken}
          captureCheckout={captureCheckout}
          getOrderData={getOrderData}
          emptyCart={emptyCart}
          cart={cart}
          loading={loading}
          checkoutData={checkoutData}
          paymentResults={paymentResults}
          paymentError={paymentError}
        >
          <div style={{ width: "100%" }}>
            <Banner
              title="You may also like"
              numOfProds={4}
              xs={3}
              loading={loading}
              products={products}
            />
          </div>
        </Checkout>
      </main>
    </GlobalContainer>
  );
};

export default CheckoutContainer;
