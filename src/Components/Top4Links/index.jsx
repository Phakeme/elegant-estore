import React from "react";
import Grid from "@material-ui/core/Grid";
import QuickLink from "./QuickLink";
import quicklinks from "../../Data/quickLinks";

import { makeStyles } from "@material-ui/core";

const Styles = makeStyles((theme) => ({
  root: {
    margin: "0px 0px 16px -8px",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  icon: {},
  title: {},
}));

const QuickLinks = ({ searchProducts }) => {
  const classes = Styles();
  return (
    <Grid container spacing={2} className={classes.root}>
      {quicklinks.map(({ title, icon, path }, index) => (
        <QuickLink
          key={index}
          title={title}
          icon={icon}
          path={path}
          searchProducts={searchProducts}
        />
      ))}
    </Grid>
  );
};

export default QuickLinks;
