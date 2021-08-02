import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { HiCheckCircle } from "react-icons/hi";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";
import FormInput from "./CustomTextField";

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
  textField: {
    marginTop: 15,
  },
}));

const Checkout = () => {
  const classes = Styles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5" paragraph component="h2">
            Checkout
          </Typography>
          <Paper style={{ padding: "10px 10px 30px 10px" }}>
            <Grid container>
              <Grid item xs={1}>
                <HiCheckCircle className={classes.icon} />
              </Grid>
              <Grid item xs={11}>
                <Typography>Customer details</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <form
                  noValidate
                  autoComplete="on"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.textField}
                        id="standard-basic"
                        color="secondary"
                        label="First name"
                        fullWidth
                        {...register("firstName")}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.textField}
                        id="standard-basic"
                        color="secondary"
                        label="Last name"
                        fullWidth
                      />
                    </Grid>
                    <div style={{ padding: "0 8px", width: "100%" }}>
                      <TextField
                        className={classes.textField}
                        id="standard-basic"
                        color="secondary"
                        label="Email"
                        type="mail"
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <input type="submit" />
                </form>
              </Grid>
            </Grid>
          </Paper>
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
    </FormGroup>
  );
};

export default Checkout;
