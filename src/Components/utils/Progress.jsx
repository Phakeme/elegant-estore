import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const Progress = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <CircularProgress color="secondary" />
      </Grid>
      <Grid item>
        <span>Loading...</span>
      </Grid>
    </Grid>
  );
};

export default Progress;
