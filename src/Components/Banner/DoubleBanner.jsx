import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Styles from "./styles";

const DoubleBanner = ({ searchProducts }) => {
  const classes = Styles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container spacing={isSmall ? 0 : 2}>
      <Grid item xs={12} sm={6} onClick={() => searchProducts("women")}>
        <Link to="/search/women">
          <Paper className={classes.DoubleBannerpaper}>
            <div>
              <img
                style={{ width: "100%" }}
                src="./images/doubleBanner/DT-Double-banner-Women.jpg"
                alt="doubleBanner Women"
              />
            </div>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} onClick={() => searchProducts("men")}>
        <Link to="/search/men">
          <Paper className={classes.DoubleBannerpaper}>
            <div>
              <img
                style={{ width: "100%" }}
                src="./images/doubleBanner/DT-Double-banner-Men.jpg"
                alt="doubleBanner men"
              />
            </div>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  );
};

export default DoubleBanner;
