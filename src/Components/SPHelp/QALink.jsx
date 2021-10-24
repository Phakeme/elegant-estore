import React from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";

const QALink = ({ label, icon }) => {
  const classes = Styles();
  return (
    <Grid item xs={6} sm={4}>
      <div className={classes.iconLink}>
        <div style={{ margin: 0 }}>
          <div className={classes.icon}>{icon}</div>
          <h3 className={classes.label}>{label}</h3>
        </div>
      </div>
    </Grid>
  );
};

export default QALink;
