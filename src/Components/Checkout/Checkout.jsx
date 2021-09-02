import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckoutForm from "./CheckoutForm";
import Styles from "./styles";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./Review";

const steps = ["Checkout", "Payment", "Success"];

const Checkout = ({
  cart,
  generateToken,
  checkoutToken,
  captureCheckout,
  getOrderData,
  emptyCart,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = Styles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const CurrentForm = () =>
    activeStep === 0 ? (
      <CheckoutForm nextStep={nextStep} />
    ) : (
      <PaymentForm
        backStep={backStep}
        nextStep={nextStep}
        emptyCart={emptyCart}
        getOrderData={getOrderData}
        captureCheckout={captureCheckout}
      />
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Stepper
          elevation={1}
          activeStep={activeStep}
          className={classes.stepper}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <CurrentForm />
      </Grid>

      <Grid item xs={4}>
        <Paper style={{ padding: 10 }}>
          <OrderSummary />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
