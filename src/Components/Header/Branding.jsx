import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../img/elegant-logo.svg";

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
  brandBurger: {
    fontSize: 25,
    marginRight: 20,
    "@media (min-width: 961px)": {
      display: "none",
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
        <GiHamburgerMenu className={classes.brandBurger} />
      </div>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="brand-logo" />
      </Link>
    </div>
  );
};

export default Branding;
