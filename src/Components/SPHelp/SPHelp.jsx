import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FAQ from "./Accordion";
import Styles from "./styles";

const SPHelp = ({ qaItems }) => {
  const classes = Styles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.banner}></div>
      <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={8} style={{ marginTop: "-80px" }}>
          <div className={classes.gridArea}>
            <div className={classes.iconLink}>Text</div>
            <div className={classes.iconLink}>Text</div>
            <div className={classes.iconLink}>Text</div>
            <div className={classes.iconLink}>Text</div>
            <div className={classes.iconLink}>Text</div>
            <div className={classes.iconLink}>Text</div>
          </div>
          {console.log(qaItems, "SPHELP aqItems")}
          <FAQ qaItems={qaItems} />
        </Grid>
        <Grid item xs={4}>
          Text
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SPHelp;
