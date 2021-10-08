import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Admin from "./Admin/";
import Branding from "./Branding";
import GlobalContainer from "../utils/Container";
import Search from "./Search";
import useStyles from "./styles";

export default function Header({ cart, searchProducts, loading }) {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appBar}
      elevation={1}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {loading && <LinearProgress color="secondary" />}
      <GlobalContainer>
        <Toolbar disableGutters className={classes.toolBar}>
          <Grid container spacing={2}>
            <Grid item xs={7} sm={6} md={2} lg={2}>
              <Branding />
            </Grid>
            <Grid item sm={6} md={6} lg={7} className={classes.search}>
              <Search searchProducts={searchProducts} />
            </Grid>
            <Grid item xs={5} sm={6} md={4} lg={3}>
              <Admin cart={cart} />
            </Grid>
          </Grid>
        </Toolbar>
        <div className={classes.mobileSearch}>
          <Search searchProducts={searchProducts} />
          {/* Test */}
        </div>
      </GlobalContainer>
    </AppBar>
  );
}
