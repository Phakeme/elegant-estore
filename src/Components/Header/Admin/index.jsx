import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { FaRegUser, FaRegQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import DropDownLink from "./DropDownLink";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

const styles = makeStyles((theme) => ({
  adminBtn: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    borderRadius: " 4px",
    justifyContent: "center",
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  badge: {
    color: theme.palette.primary.main,
  },
  textLabel: {
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));

const Admin = ({ cart }) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const classes = styles();

  return (
    <Grid
      container
      alignItems="center"
      style={{
        height: "100%",
        textAlign: "center",
      }}
    >
      {/* -------------- HELP LINK AND SUBLINKS -------------- */}
      <Grid
        className={classes.link + " " + classes.adminBtn}
        item
        xs={4}
        onMouseEnter={() => setHelpOpen(true)}
        onMouseLeave={() => setHelpOpen(false)}
        onClick={() => setHelpOpen(!helpOpen)}
      >
        <Link to="/sp-help">
          <Box className={classes.textLabel}>
            <span>
              <FaRegQuestionCircle fontSize={20} style={{ marginRight: 5 }} />
            </span>
            <span>Help</span>
          </Box>
        </Link>
      </Grid>
      {/* -------------- CART LINK -------------- */}
      <Grid item xs={4} className={classes.lik}>
        <Link to="/cart">
          <Box>
            <span>
              <Badge badgeContent={cart.total_items} color="secondary">
                <FaShoppingCart fontSize={20} />
              </Badge>
            </span>
            <span style={{ marginLeft: "10px" }} className={classes.textLabel}>
              Cart
            </span>
          </Box>
        </Link>
      </Grid>
      {/* -------------- LOGIN AND SUBLINKS -------------- */}
      <Grid
        className={classes.link}
        item
        xs={4}
        onClick={() => setLoginOpen(!loginOpen)}
      >
        <Box>
          <span>
            <FaRegUser fontSize={20} style={{ marginRight: 5 }} />
          </span>
          <span className={classes.textLabel}>Login</span>
          <span className={classes.textLabel}>
            {!loginOpen ? <BiChevronDown /> : <BiChevronUp />}
          </span>
        </Box>
        {loginOpen && (
          <Paper
            elevation={5}
            style={{
              position: "absolute",
              marginTop: "1px",
              padding: "10px",
              width: "206px",
              height: "235px",
              right: "0px",
              top: "50px",
              zIndex: "1200",
            }}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <Link
              style={{ fontWeight: 500, marginBottom: "0px" }}
              to="/sp-help"
            >
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                fullWidth
                style={{
                  color: "white",
                }}
              >
                <span>Account</span>
              </Button>
            </Link>
            <span>OR</span>
            <Link
              to="/sp-help"
              style={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                marginBottom: "16px",
                marginTop: "10px",
              }}
            >
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                fullWidth
              >
                <span style={{ fontWeight: 700 }}>CREATE ACCOUNT</span>
              </Button>
            </Link>
            <Divider />
            <Box
              style={{
                marginTop: "16px",
                textAlign: "left",
              }}
            >
              <DropDownLink />
            </Box>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default Admin;
