import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
import Styles from "./styles";

const DoubleBanner = ({ products, title }) => {
  const classes = Styles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={6} style={{ background: "" }}>
          <Link to="">
            <img
              src="./images/doubleBanner/DT-Double-banner-Women.jpg"
              alt=""
            />
          </Link>
        </Grid>
        <Grid item xs={6} style={{ background: "" }}>
          <Link to="">
            <img src="./images/doubleBanner/DT-Double-banner-Men.jpg" alt="" />
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DoubleBanner;
