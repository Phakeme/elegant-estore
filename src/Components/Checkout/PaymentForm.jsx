import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Styles from "./styles";

const PaymentForm = ({
  backStep,
  activeStep,
  captureCheckout,
  getOrderData,
  nextStep,
  emptyCart,
}) => {
  const classes = Styles();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[strip error]", error);
    } else {
      const getCustomerData = sessionStorage.getItem("checkoutCustomerInfo");
      const getLocalOrderData = localStorage.getItem("checkoutData");
      const dataInfo = JSON.parse(getCustomerData);
      const checkoutInfo = JSON.parse(getLocalOrderData);

      const orderData = {
        line_items: checkoutInfo.live.line_items,
        customer: {
          firstname: dataInfo.firstName,
          lastname: dataInfo.lastName,
          email: dataInfo.email,
        },
        shipping: {
          name: dataInfo.firstName,
          street: dataInfo.street,
          town_city: dataInfo.city,
          county_state: dataInfo.province,
          postal_zip_code: dataInfo.zipcode,
          country: "ZA",
        },
        fulfillment: { shipping_method: checkoutInfo.shipping_methods[0].id },
        billing: {
          name: `${dataInfo.firstName} ${dataInfo.lastName}`,
          street: dataInfo.street,
          town_city: dataInfo.city,
          county_state: dataInfo.province,
          postal_zip_code: dataInfo.zipcode,
          country: "ZA",
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      captureCheckout(orderData, checkoutInfo.id);
      nextStep();
    }
  };

  return (
    <Paper style={{ padding: 10 }}>
      <span>
        Please use this demo card number to make your paymant:
        42424242424242424242424242
      </span>
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              {stripe ? (
                <CardElement />
              ) : (
                <p>Something went wrong, please try again later</p>
              )}
              <br /> <br />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    disabled={activeStep === 0}
                    className={classes.backButton}
                    onClick={backStep}
                    size="large"
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    style={{ color: "white" }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={!stripe}
                    color="secondary"
                  >
                    Pay Price
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </Paper>
  );
};

export default PaymentForm;
