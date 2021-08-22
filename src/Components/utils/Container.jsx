import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  root: {
    width: "1280px",
    "@media (max-width: 1280px)": {
      width: "1040px",
      margin: "auto",
    },
  },
}));

const GlobalContainer = ({ children }) => {
  const classes = Styles();
  return <Container className={classes.root}>{children}</Container>;
};

export default GlobalContainer;
