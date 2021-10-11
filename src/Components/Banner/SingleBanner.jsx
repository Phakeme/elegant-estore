import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";

const SingleBanner = ({ searchProducts }) => {
  const classes = Styles();
  return (
    <div className={`${classes.fluidBox} + ${classes.singleBanner}`}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={12} onClick={() => searchProducts("women")}>
            <Link to="/search/women">
              <div
                style={{
                  height: 258,
                  backgroundImage:
                    "url(./images/doubleBanner/DT-Double-banner-Women-shoes.jpg)",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SingleBanner;
