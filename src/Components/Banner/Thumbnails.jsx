import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";

const Thumbnails = ({ products, title }) => {
  const classes = Styles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={2}>
          Test
        </Grid>
        <Grid item xs={2}>
          Test
        </Grid>
        <Grid item xs={2}>
          Test
        </Grid>
        <Grid item xs={2}>
          Test
        </Grid>
        <Grid item xs={2}>
          Test
        </Grid>
        <Grid item xs={2}>
          Test
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Thumbnails;
