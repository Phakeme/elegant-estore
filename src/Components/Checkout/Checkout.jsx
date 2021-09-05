import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckoutForm from "./CheckoutForm";
import Styles from "./styles";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./Review";
import {MdPayment} from "react-icons/md"

const steps = ["Checkout", "Payment", "Success"];

const Checkout = ({
  cart,
  generateToken,
  checkoutToken,
  checkoutData,
  captureCheckout,
  getOrderData,
  emptyCart,
  children,
  paymentResults
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = Styles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const CurrentForm = () => {
    const history = useHistory()
    if (activeStep === 0) {
      return <CheckoutForm nextStep={nextStep} />
      } else if (activeStep === 1){
      return (
        <PaymentForm
          backStep={backStep}
          nextStep={nextStep}
          emptyCart={emptyCart}
          getOrderData={getOrderData}
          captureCheckout={captureCheckout}
        />
      )} else if (activeStep > 1 && paymentResults ) 
    {
      return (<Paper className={classes.paymentResults}><div className={classes.paymentIcon}><MdPayment/></div><h3>Payment of <span className={classes.textDecoration}>{paymentResults.order_value.formatted_with_symbol}</span> was successful.</h3> <h3>Confirmation email was sent to <span className={classes.textDecoration}> {paymentResults.customer.email}</span>.</h3><h3>Thank you <span className={classes.textDecoration}> {paymentResults.customer.firstName} </span> for being our valued customer.</h3><h3>We are so grateful for the pleasure of serving you and hope we met your expectations.   </h3> <Link to="/"><Button variant="contained" size="large" color="secondary" style={{color: 'white'}}>Continue shopping</Button></Link></Paper>)
    } else {
      // history.push("/");
      return null
    }
  };

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
        <div style={{ marginBottom: 16 }}>
          <CurrentForm />
        </div>
        {activeStep === 1 && children}
      </Grid>

      <Grid item xs={4}>
        
          <OrderSummary checkoutData={checkoutData} />
       
      </Grid>
    </Grid>
  );
};

export default Checkout;
