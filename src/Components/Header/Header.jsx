import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Admin from "./Admin";

// FaRegUser
// BiChevronDown
// FaRegQuestionCircle
// GrCart

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  appbar: {
    minHeight: "76px",
    display: "flex",
    justifyContent: "center",
  },
  toolbar: {
    height: "32px",
    padding: "0",
  },
  navbrand: {
    width: "222px",
    height: "32px",
    marginRight: "16px",
  },
  navlogo: {
    height: "100%",
  },
  searchBox: {
    maxWidth: "660px",
    width: "100%",
    // background: "red",
    minWidth: "200px",
    height: "40px",
    marginRight: "16px",
  },
  search: {
    position: "relative",
    border: "1px solid #c8c8c8",
    borderRadius: "3px",
    backgroundColor: fade("#fff", 0.15),
    "&:hover": {
      backgroundColor: fade("#fff", 0.25),
    },
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: "1px 1px 1px 10px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: "10px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${30}px)`,
    transition: "",
    width: "100%",
  },
  info: {
    minWidth: "200px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar elevation={1} className={classes.appbar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item className={classes.navbrand}>
              <Link to="/">
                <img
                  className={classes.navlogo}
                  src="./images/elegant-logo.svg"
                  alt="brand-logo"
                />
              </Link>
            </Grid>
            <Grid item className={classes.searchBox}>
              <Grid container>
                <Grid item xs={10}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search products, brands and categories"
                      inputProps={{
                        "aria-label": "Search products, brands and categories",
                      }}
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    style={{
                      height: "40px",
                      width: "100%",
                      color: "white",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Admin />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
