import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
      console.log("[error]", error);
    } else {
      const getCustomerData = localStorage.getItem("checkoutOrderData");
      const getLocalOrderData = localStorage.getItem("checkoutData");
      const dataInfo = JSON.parse(getCustomerData);
      const checkoutInfo = JSON.parse(getLocalOrderData);
      // console.log(, "TTTTST checkoutInfo");

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
    }
  };

  return (
    <Paper style={{ padding: 10 }}>
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div>
                <Button
                  variant="outlined"
                  disabled={activeStep === 0}
                  className={classes.backButton}
                  onClick={backStep}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="secondary"
                >
                  Pay Price
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </Paper>
  );
};

export default PaymentForm;
