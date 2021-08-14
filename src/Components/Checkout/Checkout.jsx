import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckoutForm from "./CheckoutForm";
import Styles from "./styles";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./Review";

const steps = ["Checkout", "Payment", "Success"];

const Checkout = ({ cart, generateToken, checkoutToken }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = Styles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => (activeStep === 0 ? <CheckoutForm /> : <PaymentForm />);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {/* <Typography variant="h5" paragraph component="h2">
          Checkout
        </Typography> */}
        <div>
          <Stepper
            elevation={1}
            activeStep={activeStep}
            className={classes.stepper}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={backStep}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button variant="contained" color="secondary" onClick={nextStep}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <Paper style={{ padding: 10 }}>
          <div> Order Summary</div>
          {checkoutToken && <OrderSummary checkoutToken={checkoutToken} />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
