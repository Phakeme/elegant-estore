import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { FaRegUser, FaRegQuestionCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { GrCart } from "react-icons/gr/";

const Admin = () => {
  return (
    <Box
      flexGrow={1}
      style={{
        height: 39,
        minWidth: 286,
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
        <Grid item xs={4} style={{ backgroundColor: "" }}>
          <label>
            <span>
              <FaRegUser fontSize={20} style={{ marginRight: 5 }} /> Login{" "}
              <BiChevronDown />
            </span>
          </label>
        </Grid>
        <Grid item xs={4} style={{ backgroundColor: "" }}>
          <label>
            <span>
              <FaRegQuestionCircle fontSize={20} style={{ marginRight: 5 }} />{" "}
              Help <BiChevronDown />
            </span>
          </label>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: 4,
            height: "100%",
            display: "grid",
            alignItems: "center",
          }}
        >
          <label>
            <span>
              <GrCart fontSize={20} /> Cart
            </span>
          </label>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
