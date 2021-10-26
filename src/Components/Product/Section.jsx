import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";

const Section = ({ title, subTitle, body }) => {
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.information}>
        <h2 className={classes.inforHeading}>{title}</h2>
      </div>
      <Divider />
      <div className={classes.info_delivery}>
        <h3 style={{ margin: 0, fontSize: "0.875rem", fontWeight: "bold" }}>
          {subTitle}
        </h3>
        <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>
          {body}
        </p>
      </div>
    </Paper>
  );
};

export default Section;
