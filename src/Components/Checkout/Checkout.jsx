import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckoutForm from "./CheckoutForm";
import Styles from "./styles";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./Review";

const steps = ["Checkout", "Confirmation", "Payment", "Success"];

const Checkout = ({
  cart,
  generateToken,
  checkoutToken,
  captureCheckout,
  getOrderData,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = Styles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const CurrentForm = () =>
    activeStep === 0 ? (
      <CheckoutForm nextStep={nextStep} getOrderData={getOrderData} />
    ) : (
      <PaymentForm backStep={backStep} />
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div>
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
        </div>
      </Grid>

      <Grid item xs={4}>
        <Paper style={{ padding: 10 }}>
          <div> Order Summary</div>
          <OrderSummary />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
