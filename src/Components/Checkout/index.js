import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import CheckoutForm from "./CheckoutForm.js";
import Styles from "./styles";
import PaymentForm from "./PaymentForm.jsx";
import OrderSummary from "./Review.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MdPayment } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
import MarginTop from "../utils/MarginTop.jsx";

const steps = ["Checkout", "Payment", "Complete"];

const Checkout = ({
  cart,
  generateToken,
  checkoutToken,
  checkoutData,
  captureCheckout,
  getOrderData,
  emptyCart,
  paymentError,
  children,
  paymentResults,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = Styles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const CurrentForm = () => {
    const history = useHistory();

    if (cart.total_items === 0 && activeStep !== 2)
      return <div>{history.push("/")}</div>;

    if (!checkoutData && activeStep === 1)
      return <div>{history.push("/cart")}</div>;

    if (activeStep === 0) {
      return <CheckoutForm nextStep={nextStep} />;
    } else if (activeStep === 1) {
      return (
        <PaymentForm
          backStep={backStep}
          nextStep={nextStep}
          emptyCart={emptyCart}
          getOrderData={getOrderData}
          captureCheckout={captureCheckout}
        />
      );
    } else if (activeStep > 1 && paymentResults) {
      return (
        <Paper className={classes.paymentResults}>
          <div>
            <div className={classes.paymentIcon}>
              <MdPayment />
            </div>
            <h3>
              Payment of{" "}
              <span className={classes.textDecoration}>
                {paymentResults.order_value.formatted_with_symbol}
              </span>{" "}
              was successful.
            </h3>{" "}
            <h3>
              Confirmation email was sent to{" "}
              <span className={classes.textDecoration}>
                {" "}
                {paymentResults.customer.email}
              </span>
              .
            </h3>
            <h3>
              Thank you{" "}
              <span className={classes.textDecoration}>
                {" "}
                {paymentResults.customer.firstName}{" "}
              </span>{" "}
              for being our valued customer.
            </h3>
            <h3>
              We are so grateful for the pleasure of serving you and hope we met
              your expectations.{" "}
            </h3>{" "}
            <Link to="/">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                style={{ color: "white" }}
              >
                Continue shopping
              </Button>
            </Link>
          </div>
        </Paper>
      );
    } else if (activeStep > 1 && paymentError) {
      return (
        <Paper className={classes.paymentResults}>
          <div style={{ marginTop: 110 }}>
            <div className={classes.paymentIcon}>
              <BiErrorCircle />
            </div>
            <h3>Something went wrong please try again later!</h3>
          </div>
        </Paper>
      );
    } else {
      return (
        <Paper className={classes.paymentResults}>
          <div>
            <div className={classes.paymentIcon}>
              <CircularProgress />
            </div>
            <h3>Processing payment...</h3>
          </div>
        </Paper>
      );
    }
  };

  return (
    <MarginTop>
      <Grid container spacing={2} style={{ paddingTop: 16 }}>
        <Grid item xs={12} md={8}>
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
          <div className={classes.bannerDesktop}>
            {activeStep === 1 && children}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.bannerMobile}>
            {activeStep === 1 && children}
          </div>
          <OrderSummary checkoutData={checkoutData} />
        </Grid>
      </Grid>
    </MarginTop>
  );
};

export default Checkout;
