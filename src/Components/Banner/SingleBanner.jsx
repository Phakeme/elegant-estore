import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";

const SingleBanner = () => {
  const classes = Styles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ background: "" }}>
          <Link to="/">
            <img src="./images/1608-DT-Single-banner-Athleisure.jpg" alt="" />
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleBanner;
