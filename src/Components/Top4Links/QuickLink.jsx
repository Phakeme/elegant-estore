import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const QuickLink = ({ icon, title, path, searchProducts }) => {
  const Styles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      padding: 5,
      marginBottom: 16,
      "@media (max-width: 960px)": {
        // background: "red",
        padding: "0 8px",
      },
    },
    icon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {},
    item: { background: "" },
  }));
  const classes = Styles();
  return (
    <Grid item xs={6} md={3} onClick={() => searchProducts(path)}>
      <Link to={`/search/${path}`}>
        <Paper className={classes.root}>
          <Grid container alignItems="center" className={classes.item}>
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
