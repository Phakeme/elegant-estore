import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../img/elegant-logo.svg";
import Drawer from "./Drawer";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "40px",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    "@media (max-width: 600px)": {
      height: "25px",
    },
  },
  textLabel: {
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));

const Branding = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div>
        <Drawer />
      </div>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="brand-logo" />
      </Link>
    </div>
  );
};

export default Branding;
