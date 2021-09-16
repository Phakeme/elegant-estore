import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";

const DoubleBanner = () => {
  const classes = Styles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Link to="/search/women">
            <div
              style={{
                height: 258,
                backgroundImage:
                  "url(./images/doubleBanner/DT-Double-banner-Women.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/search/men">
            <div
              style={{
                height: 258,
                backgroundImage:
                  "url(./images/doubleBanner/DT-Double-banner-Men.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DoubleBanner;
