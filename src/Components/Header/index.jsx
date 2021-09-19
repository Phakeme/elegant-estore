import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Admin from "./Admin/";
import GlobalContainer from "../utils/Container";
import logo from "../../img/elegant-logo.svg";

export default function Header({ cart, searchProducts, loading }) {
  let history = useHistory();
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const storeQuery = (value) => {
    const query = value.split(" ").join(" ");
    setQuery(query);
  };

  const search = () => {
    if (query.length > 0) {
      console.log(query);
      setQuery("");
      searchProducts(query);
      history.push(`/search/${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <AppBar
      elevation={1}
      style={{ minHeight: "76px", display: "flex", justifyContent: "center" }}
    >
      {loading && <LinearProgress color="secondary" />}
      <GlobalContainer>
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
                      src={logo}
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
                        value={query}
                        onChange={(e) => {
                          storeQuery(e.target.value);
                        }}
                        onKeyPress={handleKeyPress}
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
                      onClick={() => search()}
                    >
                      Search
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Admin cart={cart} />
          </Grid>
        </Toolbar>
      </GlobalContainer>
    </AppBar>
  );
}
