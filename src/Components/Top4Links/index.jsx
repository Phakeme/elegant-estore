import React from "react";
import Grid from "@material-ui/core/Grid";
import QuickLink from "./QuickLink";
import quicklinks from "../../Data/quickLinks";

import { makeStyles } from "@material-ui/core";

const Styles = makeStyles((theme) => ({
  root: {
    "@media (max-width: 960px)": {
      margin: "0px 0px 0px -8px",
    },
  },
  icon: {},
  title: {},
}));

const QuickLinks = ({ searchProducts }) => {
  const classes = Styles();
  return (
    <section>
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
    </section>
  );
};

export default QuickLinks;
