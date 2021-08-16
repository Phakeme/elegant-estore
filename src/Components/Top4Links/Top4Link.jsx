import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const Top4Link = () => {
  const Styles = makeStyles((theme) => ({
    root: {
      height: 56,
    },
  }));
  const classes = Styles();
  return (
    <Grid item xs={3}>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item>Image</Grid>
          <Grid item>Text</Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Top4Link;
