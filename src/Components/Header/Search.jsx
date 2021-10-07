import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Search = ({ searchProducts }) => {
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
    <Box
      flexGrow={1}
      style={{
        display: "flex",
        width: "100%",
        marginLeft: 8,
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
              "aria-label": "Search products, brands and categories",
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
  );
};

export default Search;
