import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { FaRegUser, FaRegQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { GrCart } from "react-icons/gr/";
import DropDownLink from "./DropDownLink";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

const styles = makeStyles((theme) => ({
  adminBtn: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    borderRadius: " 4px",
    justifyContent: "center",
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  badge: {
    color: theme.palette.primary.main,
  },
}));

const Admin = ({ cart }) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const classes = styles();

  return (
    <Box
      style={{
        height: "40px",
        width: "280px",
      }}
    >
      <Grid
        container
        style={{
          height: "100%",
          alignItems: "center",
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
          <label>
            <span>
              <FaRegQuestionCircle fontSize={20} style={{ marginRight: 5 }} />{" "}
              Help
            </span>
          </label>
        </Grid>
        {/* -------------- CART LINK -------------- */}
        <Grid item xs={4} className={classes.link}>
          <Link to="/cart">
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span>
                <Badge badgeContent={cart.total_items} color="secondary">
                  <FaShoppingCart fontSize={20} />
                </Badge>
              </span>

              <span style={{ marginLeft: "10px" }}>Cart</span>
            </Box>
          </Link>
        </Grid>
        {/* -------------- LOGIN AND SUBLINKS -------------- */}
        <Grid
          className={classes.link}
          item
          xs={4}
          style={{
            height: "100%",
            display: "grid",
            alignItems: "center",
          }}
          onMouseEnter={() => setLoginOpen(true)}
          onMouseLeave={() => setLoginOpen(false)}
          // onClick={() => setLoginOpen(!loginOpen)}
        >
          <label>
            <span>
              <FaRegUser fontSize={20} style={{ marginRight: 5 }} /> Login{" "}
              {!loginOpen ? <BiChevronDown /> : <BiChevronUp />}
            </span>
          </label>
          {loginOpen && (
            <Paper
              elevation={5}
              style={{
                position: "absolute",
                marginTop: "1px",
                padding: "10px",
                width: "206px",
                height: "269px",
                right: "0px",
                top: "50px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                fullWidth
                style={{
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                <Link
                  style={{ fontWeight: 500, width: "100%", height: "100%" }}
                  to="/login"
                >
                  <span>Login</span>
                </Link>
              </Button>
              <span>OR</span>
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                fullWidth
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  marginTop: "10px",
                }}
              >
                <span style={{ fontWeight: 700 }}>CREATE ACCOUNT</span>
              </Button>
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
    </Box>
  );
};

export default Admin;
