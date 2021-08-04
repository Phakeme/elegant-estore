import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { HiCheckCircle } from "react-icons/hi";
import Styles from "./styles";

const FormSubHeader = ({ title }) => {
  const classes = Styles();
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <HiCheckCircle className={classes.icon} />
        </Grid>
        <Grid item xs={11}>
          <Typography>{title}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default FormSubHeader;
