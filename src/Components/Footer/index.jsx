import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ElegantWhiteLogo from "../../img/footer/elegant-white-logo.svg";
import GooglePlayLogo from "../../img/footer/google-play-logo.svg";
import AppStoreLogo from "../../img/footer/app-store-logo.svg";
import Contacts from "./Contacts";

const Footer = () => {
  const Styles = makeStyles((theme) => ({
    root: {
      background: theme.palette.grey[900],
      minHeight: 300,
      color: "white",
      padding: "50px 30px",
      width: "100%",
    },
    inner: {
      margin: "auto",
      width: "1232px",
      "@media (max-width: 1280px)": {
        width: "100%",
      },
    },
    apps: {
      textAlign: "right",

      "@media (max-width: 960px)": {
        textAlign: "left",
        marginTop: 20,
      },
    },
    heading: {
      margin: "0 0 10px 0",
      fontSize: 13,
      fontWeight: 500,
    },
    subHeading: {
      marginBottom: 20,
      color: theme.palette.grey[500],
    },
    textField: {
      "& .MuiFilledInput-root": {
        background: theme.palette.grey[100],
        height: 42,
      },
    },
    btns: {},
  }));
  const classes = Styles();
  return (
    <footer className={classes.root}>
      <Grid container spacing={2} className={classes.inner}>
        <Grid item sm={12} md={3}>
          <Link to="/">
            <img
              style={{ height: "32px", marginBottom: 20 }}
              src={ElegantWhiteLogo}
              alt="elegant-icon.svg"
            />
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          className={classes.app}
          style={{ width: "100%" }}
        >
          <h4 className={classes.heading}>NEW TO ELEGANT?</h4>
          <div className={classes.subHeading}>
            <span>SIGN UP AND GET UP TO R200 OFF</span>
          </div>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={7}>
                <TextField
                  className={classes.textField}
                  color="secondary"
                  label="Email"
                  id="email"
                  name="email"
                  type="mail"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
                <Grid container spacing={2} className={classes.btns}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Button
                      color="secondary"
                      size="large"
                      variant="outlined"
                      fullWidth
                    >
                      Male
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Button
                      color="secondary"
                      size="large"
                      variant="outlined"
                      fullWidth
                    >
                      Female
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item sm={12} md={4}>
          <Grid container className={classes.apps}>
            <Grid item xs={12}>
              <h4 className={classes.heading}>
                DOWNLOAD THE ELEGANT FREE APP!
              </h4>
              <div className={classes.subHeading}>
                <span>Get access to exclusive offers!</span>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={12} style={{ height: 42 }}>
                <Link to="#" style={{ marginRight: 10 }}>
                  <img style={{ height: "100%" }} src={AppStoreLogo} alt="" />
                </Link>
                <Link to="#">
                  <img
                    style={{ height: "100%" }}
                    src={GooglePlayLogo}
                    alt="Google Play Logo"
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Contacts />
      </Grid>
    </footer>
  );
};

export default Footer;
