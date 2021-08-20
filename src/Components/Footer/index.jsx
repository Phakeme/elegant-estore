import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const Styles = makeStyles((theme) => ({
    root: {
      background: theme.palette.grey[900],
      minHeight: 150,
      color: "white",
      padding: 30,
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
    btns: {
      paddingLeft: 10,
    },
  }));
  const classes = Styles();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Link to="/">
              <img
                style={{ height: "32px" }}
                src="./images/elegant-white-logo.svg"
                alt="elegant-icon.svg"
              />
            </Link>
          </Grid>
          <Grid item xs={5}>
            <h4 className={classes.heading}>NEW TO ELEGANT?</h4>
            <div className={classes.subHeading}>
              <span>SIGN UP AND GET UP TO R200 OFF</span>
            </div>
            <form noValidate autoComplete="off">
              <Grid container>
                <Grid item xs={7}>
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
                <Grid xs={5}>
                  <Grid container spacing={1} className={classes.btns}>
                    <Grid item xs={6}>
                      <Button
                        color="secondary"
                        size="large"
                        variant="outlined"
                        fullWidth
                      >
                        Male
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
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
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={2}>
                <img
                  style={{ height: "42px" }}
                  src="./images/elegant-icon.svg"
                  alt="elegant-icon.svg"
                />
              </Grid>
              <Grid item xs={10}>
                <h4 className={classes.heading}>
                  DOWNLOAD THE ELEGANT FREE APP!
                </h4>
                <div className={classes.subHeading}>
                  <span>Get access to exclusive offers!</span>
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={12} style={{ height: 42 }}>
                  <Link to="/" style={{ marginRight: 10 }}>
                    <img
                      style={{ height: "100%" }}
                      src="./images/app-store-logo.svg"
                      alt=""
                    />
                  </Link>
                  <Link to="/">
                    <img
                      style={{ height: "100%" }}
                      src="./images/google-play-logo.svg"
                      alt=""
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
