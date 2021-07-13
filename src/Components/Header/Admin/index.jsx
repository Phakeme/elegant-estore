import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { FaRegUser, FaRegQuestionCircle } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GrCart } from "react-icons/gr/";
import DropDownLink from "./DropDownLink";
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Admin = () => {
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
          className={classes.link}
          item
          xs={4}
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            borderRadius: " 4px",
            justifyContent: "center",
          }}
          onMouseEnter={() => setHelpOpen(true)}
          onMouseLeave={() => setHelpOpen(false)}
          onClick={() => setHelpOpen(!helpOpen)}
        >
          <label>
            <span>
              <FaRegQuestionCircle fontSize={20} style={{ marginRight: 5 }} />{" "}
              Help {!helpOpen ? <BiChevronDown /> : <BiChevronUp />}
            </span>
          </label>
          {/* {helpOpen && (
            <Paper
              elevation={5}
              style={{
                position: "absolute",
                marginTop: "1px",
                padding: "10px",
                width: "206px",
                height: "269px",
                right: "115px",
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
                <span style={{ fontWeight: 500 }}>Login</span>
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
          )} */}
        </Grid>
        {/* -------------- CART LINK -------------- */}
        <Grid item xs={4} style={{ backgroundColor: "" }}>
          <label>
            <span>
              <GrCart fontSize={20} /> Cart
            </span>
          </label>
        </Grid>
        {/* -------------- LOGIN AND SUBLINKS -------------- */}
        <Grid
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
              <BiChevronDown />
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
