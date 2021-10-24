import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: 16,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function GlabalAlert({ open, setOpen }) {
  const classes = useStyles();

  return (
    <Collapse in={open}>
      <Paper className={classes.root}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Payment gateway is in Stripe Test Mode, We don't accept payments yet!
        </Alert>
      </Paper>
    </Collapse>
  );
}
