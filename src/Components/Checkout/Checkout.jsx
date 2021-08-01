import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
  },
  header: {
    height: "30px",
    textTransform: "uppercase",
  },
  items: {
    width: "53.47%",
  },
  quantity: {
    width: "10.315%",
  },
  unitPrice: {
    width: "18.105%",
  },
  subTotal: {
    width: "18.105%",
  },
  actionBtns: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionBtn: {
    marginLeft: 10,
    color: theme.palette.primary.main,
    width: 250,
  },
}));

const Checkout = () => {
  const classes = Styles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h5" paragraph component="h2">
          <Box>Checkout</Box>
        </Typography>
        <Paper style={{ padding: 10 }}>
          <div>Checkout</div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" paragraph component="h2">
          <Box>Order Summary</Box>
        </Typography>
        <Paper style={{ padding: 10 }}>
          <div>Checkout</div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
