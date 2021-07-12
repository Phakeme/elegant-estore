import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { FaRegUser, FaRegQuestionCircle } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GrCart } from "react-icons/gr/";

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
                padding: "20px",
                width: "206px",
                height: "256px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                style={{
                  width: "100%",
                  color: "white",
                }}
              >
                Login
              </Button>
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
