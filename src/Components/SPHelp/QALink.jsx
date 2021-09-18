import React from "react";
import Styles from "./styles";

const QALink = ({ label, icon }) => {
  const classes = Styles();
  return (
    <div className={classes.iconLink}>
      <div>
        <div className={classes.icon}>{icon}</div>
        <h3 className={classes.label}>{label}</h3>
      </div>
    </div>
  );
};

export default QALink;
