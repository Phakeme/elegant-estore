import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    margin: "auto",
    marginRight: "auto",
    width: 576,
    minHeight: 292,
    left: "50%",
    top: "50%",
    transform: " translate(-50%, -50% )",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const AddToCartModal = ({ product }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <header className={classes.root}>
        <div>
          <Typography variant="h6" component="span">
            Please select a variation
          </Typography>
        </div>
        <div>
          <Typography variant="h5" component="span">
            X
          </Typography>
        </div>
      </header>

      {product.variant_groups.map(({ id, options }, i) => (
        <div key={id}>
          {options.map(({ id, name }) => (
            <div className={classes.root}>
              <div>
                <div>{`size ${name}`}</div>
                <div>{product.price.formatted_with_symbol}</div>
              </div>
              <div>Add to</div>
            </div>
          ))}
        </div>
      ))}
    </Paper>
  );
};

export default AddToCartModal;
