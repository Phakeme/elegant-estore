import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { HiCheckCircle } from "react-icons/hi";
import Styles from "./styles";
import * as yup from "yup";
// import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string("Enter your name")
    .min(4, "Name should be of minimum 4 characters length")
    .required("Name is required"),
  lastName: yup
    .string("Enter your name")
    .min(4, "Name should be of minimum 4 characters length")
    .required("Name is required"),
});

const Checkout = () => {
  const classes = Styles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
                  autoComplete="off"
                  onSubmit={formik.handleSubmit}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.textField}
                        color="secondary"
                        type="text"
                        id="firstName"
                        name="firstName"
                        label="First name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.textField}
                        color="secondary"
                        label="Last name"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                        fullWidth
                      />
                    </Grid>
                    <div style={{ padding: "0 8px", width: "100%" }}>
                      <TextField
                        className={classes.textField}
                        color="secondary"
                        label="Email"
                        id="email"
                        name="email"
                        type="mail"
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <button type="submit">Submit</button>
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
