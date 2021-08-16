import React from "react";
import Grid from "@material-ui/core/Grid";
import QuickLink from "./QuickLink";
import quicklinks from "../../Data/quickLinks";

const QuickLinks = () => {
  return (
    <section>
      <Grid container spacing={2}>
        {quicklinks.map(({ title, icon, path }, index) => (
          <QuickLink key={index} title={title} icon={icon} path={path} />
        ))}
      </Grid>
    </section>
  );
};

export default QuickLinks;
