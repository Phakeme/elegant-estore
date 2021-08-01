import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { HiCheckCircle } from "react-icons/hi";
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
  actionBtns: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionBtn: {
    marginLeft: 10,
    color: theme.palette.primary.main,
    width: 250,
  },
  icon: {
    fontSize: "1.5rem",
    color: theme.palette.secondary.main,
  },
}));

const Checkout = () => {
  const classes = Styles();

  return (
    <FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5" paragraph component="h2">
            <Box>Checkout</Box>
          </Typography>
          <Paper style={{ padding: 10 }}>
            <Grid container>
              <Grid item xs={1}>
                <HiCheckCircle className={classes.icon} />
              </Grid>
              <Grid item xs={11}>
                <form noValidate autoComplete="off">
                  <TextField
                    id="standard-basic"
                    color="secondary"
                    fullWidth
                    label="Name"
                  />
                </form>
              </Grid>
            </Grid>
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
    </FormGroup>
  );
};

export default Checkout;
