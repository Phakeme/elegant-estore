import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  root: {
    marginTop: `${76}px`,
  },
  btn: {
    color: theme.palette.primary.main,
    margin: "10px 0 40px 0",
  },
}));

const Query = ({ children, sortedProducts, query }) => {
  console.log(sortedProducts, "From Query Page");
  const classes = Styles();
  return (
    <section className={classes.root}>
      {sortedProducts.length ? (
        <div>{children}</div>
      ) : (
        <div
          style={{ minHeight: 300, textAlign: "center", marginTop: `${110}px` }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 100,
              width: 100,
              height: 100,
              margin: "auto",
            }}
          >
            <img
              style={{ height: "100%" }}
              src="./images/QueryPage/binoculars.41e1bc35.svg"
              alt=""
            />
          </div>
          <h2
            style={{ fontSize: "1rem", fontWeight: 500, marginBottom: 15 }}
          >{`There are no results for "${query}"`}</h2>
          <p>
            - Check your spelling for typing errors
            <br />- Try searching with short and simple keywords
            <br />- Try searching more general terms - you can then filter the
            search results
          </p>
          <Link to="/">
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              size="large"
            >
              Go To HomePage
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Query;
