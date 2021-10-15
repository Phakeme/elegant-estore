import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../img/elegant-logo.svg";
import data from "../../Data/categories";

const useStyles = makeStyles({
  list: {
    width: "70vw",
  },
  fullList: {
    width: "auto",
  },
  brandBurger: {
    fontSize: 25,
    marginRight: 20,
    "@media (min-width: 961px)": {
      display: "none",
    },
  },
  brand: {
    padding: "20px 0 0 20px",
    marginBottom: 10,
  },
  logo: {
    height: "30px",
    "@media (max-width: 600px)": {
      height: "25px",
    },
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.brand}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="brand-logo" />
        </Link>
      </div>
      <Divider />
      <List>
        {data.map(({ icon, name, path }, index) => (
          <Link to={`/search/${path}`} key={index}>
            <ListItem button style={{ paddingBottom: "0px" }}>
              <ListItemIcon style={{ minWidth: "35px" }}>
                {" "}
                <span
                  style={{
                    width: "20px",
                    fontSize: "20px",
                  }}
                >
                  {icon}
                </span>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div onClick={toggleDrawer("left", true)}>
        <GiHamburgerMenu className={classes.brandBurger} />
      </div>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
