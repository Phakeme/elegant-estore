import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "63px 0 16px 0",
    "@media (max-width: 960px)": {
      margin: "110px 0 16px 0",
    },
  },
}));

const MarginTop = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.root}>{children}</section>;
};

export default MarginTop;
