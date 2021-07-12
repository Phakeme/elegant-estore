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

const Admin = () => {
  const [helpOpen, setHelpOpen] = useState(false);
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
        <Grid
          item
          xs={4}
          style={{ backgroundColor: "" }}
          onClick={() => setHelpOpen(!helpOpen)}
        >
          <label>
            <span>
              <FaRegQuestionCircle fontSize={20} style={{ marginRight: 5 }} />{" "}
              Help {helpOpen ? <BiChevronDown /> : <BiChevronUp />}
            </span>
          </label>
          {!helpOpen && (
            <Paper
              elevation={5}
              style={{
                position: "absolute",
                marginTop: "10px",
                padding: "10px",
                width: "206px",
                height: "269px",
                right: "115px",
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
                  // position: "relative",
                  marginTop: "16px",
                  textAlign: "left",
                }}
              >
                <DropDownLink />
              </Box>
            </Paper>
          )}
        </Grid>
        <Grid item xs={4} style={{ backgroundColor: "" }}>
          <label>
            <span>
              <GrCart fontSize={20} /> Cart
            </span>
          </label>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            height: "100%",
            display: "grid",
            alignItems: "center",
          }}
        >
          <label>
            <span>
              <FaRegUser fontSize={20} style={{ marginRight: 5 }} /> Login{" "}
              <BiChevronDown />
            </span>
          </label>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
