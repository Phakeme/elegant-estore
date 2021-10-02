import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import searchIcon from "../../img/binoculars.41e1bc35.svg";

const Styles = makeStyles((theme) => ({
  root: {
    marginTop: `${76}px`,
  },
  btn: {
    color: theme.palette.primary.main,
    margin: "10px 0 40px 0",
  },
}));

const NoResultsErr = ({ query, name, tipOne, tipTwo, tipThree }) => {
  const classes = Styles();
  return (
    <div style={{ minHeight: 300, textAlign: "center", marginTop: `${110}px` }}>
      <div
        style={{
          background: "white",
          borderRadius: 100,
          width: 100,
          height: 100,
          margin: "auto",
        }}
      >
        <img style={{ height: "100%" }} src={searchIcon} alt="" />
      </div>
      <p>
        {tipOne}
        <br />
        {tipTwo}
        <br />
        {tipThree}
      </p>
      <Link to="/">
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          size="large"
        >
          Go To HomePage
        </Button>
      </Link>
    </div>
  );
};

export default NoResultsErr;
