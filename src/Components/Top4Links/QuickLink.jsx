import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const QuickLink = ({ icon, title, path }) => {
  const Styles = makeStyles((theme) => ({
    root: {
      height: 56,
      padding: 5,
    },
    icon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {},
  }));
  const classes = Styles();
  return (
    <Grid item xs={3}>
      <Link to={path}>
        <Paper className={classes.root}>
          <Grid container alignItems="center">
            <Grid item xs={2} className={classes.icon}>
              <img src={icon} alt="" style={{ height: "40px" }} />
            </Grid>
            <Grid item xs={10} className={classes.title}>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {title}
              </span>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default QuickLink;
