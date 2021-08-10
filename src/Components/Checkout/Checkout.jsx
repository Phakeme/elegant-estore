import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CheckoutForm from "./checkoutForm";
import Styles from "./styles";

const Checkout = () => {
  // const classes = Styles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h5" paragraph component="h2">
          Checkout
        </Typography>
        <div>
          <CheckoutForm />
        </div>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="h5" paragraph component="h2">
          Order Summary
        </Typography>
        <Paper style={{ padding: 10 }}>
          <div>Checkout</div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
