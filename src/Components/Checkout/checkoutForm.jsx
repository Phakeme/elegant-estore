import React from "react";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";
import provinces from "../../Data/provinces";
import * as yup from "yup";
import { useFormik } from "formik";
import FormSubHeader from "./formSubHeader";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string("Enter your name")
    .min(4, "First Name should be of minimum 4 characters")
    .required("Name is required"),
  lastName: yup
    .string("Enter your name")
    .min(4, "Last Name should be of minimum 4 characters")
    .required("Name is required"),
  city: yup
    .string("Enter your city")
    .min(4, "City should be of minimum 4 characters")
    .required("City is required"),
  zipcode: yup.string("Enter your zipcode").required("Zipcode is required"),
  street: yup.string("Enter your street").required("Street name is required"),
});

const CheckoutForm = ({ nextStep, getOrderData }) => {
  const classes = Styles();
  const wrapper = React.createRef();

  const getCustomerData = sessionStorage.getItem("checkoutCustomerInfo");
  // const getLocalOrderData = localStorage.getItem("checkoutData");
  let dataInfo;
  (() => {
    if (getCustomerData == null) {
      dataInfo = {
        firstName: "",
        lastName: "",
        email: "",
        zipcode: "",
        street: "",
        city: "",
        province: "",
      };
      return dataInfo;
    } else {
      dataInfo = JSON.parse(getCustomerData);
      return dataInfo;
    }
  })();
  // console.log(dataInfo.firstName, "dataInfo.firstNamedataInfo.firstName");

  const formik = useFormik({
    initialValues: {
      firstName: dataInfo.firstName,
      lastName: dataInfo.lastName,
      email: dataInfo.email,
      zipcode: dataInfo.zipcode,
      street: dataInfo.street,
      city: dataInfo.city,
      province: dataInfo.province,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sessionStorage.setItem("checkoutCustomerInfo", JSON.stringify(values));
      alert(JSON.stringify(values, null, 2));
      nextStep();
    },
  });

  return (
    <form noValidate autoComplete="on" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item style={{ width: "100%" }}>
          <Paper style={{ padding: "10px 10px 30px 10px" }}>
            <FormSubHeader title="Personal details" />
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
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
                  <div style={{ padding: "0 8px", width: "50%" }}>
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Paper
            style={{
              padding: "10px 10px 30px 10px",
            }}
          >
            <FormSubHeader title="Shipping details" />
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel style={{ marginTop: 10 }} htmlFor="province">
                        Province
                      </InputLabel>
                      <Select
                        style={{ marginTop: 30 }}
                        fullWidth
                        ref={wrapper}
                        name="province"
                        id="province"
                        value={formik.values.province}
                        onChange={formik.handleChange}
                      >
                        {Object.entries(provinces).map(([key, value]) => (
                          <MenuItem
                            key={value}
                            id="province"
                            name="province"
                            ref={wrapper}
                            value={key}
                          >
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                      <TextField
                        className={classes.textField}
                        color="secondary"
                        label="City"
                        id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      color="secondary"
                      label="Street"
                      id="street"
                      name="street"
                      type="text"
                      fullWidth
                      error={
                        formik.touched.street && Boolean(formik.errors.street)
                      }
                      helperText={formik.touched.street && formik.errors.street}
                      onChange={formik.handleChange}
                      value={formik.values.street}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      color="secondary"
                      label="Zip Code"
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      fullWidth
                      error={
                        formik.touched.zipcode && Boolean(formik.errors.zipcode)
                      }
                      helperText={
                        formik.touched.zipcode && formik.errors.zipcode
                      }
                      onChange={formik.handleChange}
                      value={formik.values.zipcode}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Button
        className={classes.btnNext}
        variant="contained"
        color="secondary"
        type="submit"
        size="large"
        fullWidth
      >
        Next
      </Button>
    </form>
  );
};

export default CheckoutForm;
