import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
  variantBtn: {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    color: "white",
  },
  btnInnerBox: {
    display: "flex",
    alignItems: "center",
  },
}));

const AddToCartModal = ({ product }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <header className={classes.root} style={{ marginBottom: 10 }}>
        <div>
          <Typography variant="h6" component="div">
            <Box fontWeight="fontWeightBold">PLEASE SELECT A VARIATION</Box>
          </Typography>
        </div>
        <div>
          <Typography variant="h5" component="span">
            X
          </Typography>
        </div>
      </header>

      {product.variant_groups.map(({ id, options }, i) => (
        <Box key={id}>
          {options.map(({ id, name }) => (
            <Box
              key={id}
              className={classes.root}
              style={{
                marginBottom: 5,
              }}
            >
              <Box>
                <Typography variant="h6" component="div">
                  <Box fontWeight="fontWeightBold">{`size ${name}`}</Box>
                </Typography>
                <Typography variant="body1" component="div">
                  {product.price.formatted_with_symbol}
                </Typography>
              </Box>
              <FormControl>
                <Box
                  className={classes.root}
                  style={{
                    // background: "red",
                    width: 112,
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className={classes.variantBtn}
                    variant="contained"
                    color="secondary"
                    // disabled
                  >
                    <Box className={classes.btnInnerBox}>
                      <FaMinus />
                    </Box>
                  </Button>
                  <div>0</div>
                  <Button
                    className={classes.variantBtn}
                    variant="contained"
                    color="secondary"
                    // disabled
                  >
                    <Box className={classes.btnInnerBox}>
                      <FaPlus />
                    </Box>
                  </Button>
                </Box>
              </FormControl>
            </Box>
          ))}
        </Box>
      ))}
    </Paper>
  );
};

export default AddToCartModal;
