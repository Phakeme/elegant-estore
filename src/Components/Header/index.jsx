import React from "react";
import { Link } from "react-router-dom";
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

import Admin from "./Admin/";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      elevation={1}
      style={{ minHeight: "76px", display: "flex", justifyContent: "center" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box flexGrow={1}>
              <Box
                style={{
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    width: "27%",
                    height: "40px",
                    marginRight: "17px",
                  }}
                >
                  <Link to="/">
                    <img
                      style={{ height: "80%" }}
                      src="./images/elegant-logo.svg"
                      alt="brand-logo"
                    />
                  </Link>
                </Box>
                <Box
                  flexGrow={1}
                  style={{
                    display: "flex",
                    width: "100%",
                    marginRight: 25,
                  }}
                >
                  <Grid item style={{ width: "100%" }}>
                    <div
                      style={{
                        position: "relative",
                        border: "1px solid #c8c8c8",
                        borderRadius: "3px",
                        backgroundColor: fade("#fff", 0.15),
                        marginLeft: 0,
                        height: "100%",
                      }}
                    >
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search products, brands and categories"
                        inputProps={{
                          "aria-label":
                            "Search products, brands and categories",
                        }}
                        style={{
                          width: "100%",
                          padding: "0 10px 0 40px",
                          height: "100%",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item>
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
                </Box>
              </Box>
            </Box>
            <Admin />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
