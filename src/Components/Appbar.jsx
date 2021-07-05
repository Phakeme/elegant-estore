import React from "react";
import {Link } from 'react-router-dom'
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  appbar: {
    minHeight: '76px',
    background: 'white',
  },
  toolbar: {
    height: '32px',
    padding: '0'
  },
  navbrand: {
    // background: 'red',
    width: '222px',
    height: '32px',
    marginRight: '16px'
  },
  navlogo: {
    height: '100%',
  },
  search: {
    // background: 'blue',
    maxWidth: '660px',
    border: '1px solid grey',
    borderRadius: '3px',
    width: '100%',
    height: '40px',
    marginRight: '16px'
  },
  info: {
    minWidth: '200px'
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar elevation={1}>
      <Container>
        <Toolbar className={classes.toolbar}>
            <Grid item className={classes.navbrand}>
              <Link to="/">
              <img className={classes.navlogo} src='./images/elegant-logo.svg' alt="brand-logo" />
              </Link>
              </Grid>
            <Grid item  className={classes.search}>
              <Typography  variant="h6"></Typography>
            </Grid>
            <Box flexGrow={1}>
              <Typography  variant="h6" className={classes.info}>Elegant 3</Typography>
            </Box>
          </Toolbar>
      </Container>
    </AppBar>
  );
}
