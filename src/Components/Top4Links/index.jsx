import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Top4Link from "./Top4Link";

const Top4Links = () => {
  const Styles = makeStyles((theme) => ({}));
  const classes = Styles();
  return (
    <section>
      <Grid container spacing={2} className={classes.root}>
        <Top4Link />
        <Top4Link />
        <Top4Link />
        <Top4Link />
      </Grid>
    </section>
  );
};

export default Top4Links;
