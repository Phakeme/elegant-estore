import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

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
  closeBtn: {
    width: 30,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const AddToCartModal = ({
  product,
  addToCart,
  cart,
  decrementCart,
  handleClose,
}) => {
  const classes = useStyles();

  const productId = product.id;
  const productPrice = product.price.formatted_with_symbol;
  const vgrpId = product.variant_groups[0].id;

  const getItemQty = (optionId) => {
    const item = cart.line_items.filter(
      (item) => item.selected_options[0].option_id === optionId
    );

    if (item.length !== 0) {
      return {
        quantity: item[0].quantity,
        cartItemId: item[0].id,
        disabled: false,
      };
    } else {
      return { quantity: 0, disabled: true };
    }
  };

  return (
    <Paper className={classes.paper}>
      <header className={classes.root} style={{ marginBottom: 10 }}>
        <div>
          <Typography variant="h6" component="div">
            <Box>Please select a variation</Box>
          </Typography>
        </div>
        <div className={classes.closeBtn} onClick={handleClose}>
          <GrFormClose size="2rem" />
        </div>
      </header>

      {product.variant_groups.map(({ options }, i) => (
        <div key={i}>
          {options.map(({ id, name }) => (
            <div
              key={name}
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
                  {productPrice}
                </Typography>
              </Box>
              <FormControl>
                <Box
                  className={classes.root}
                  style={{
                    width: 112,
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <Button
                    className={classes.variantBtn}
                    variant="contained"
                    color="secondary"
                    disabled={getItemQty(id).disabled}
                    onClick={() =>
                      decrementCart(
                        getItemQty(id).cartItemId,
                        getItemQty(id).quantity - 1
                      )
                    }
                  >
                    <div className={classes.btnInnerBox}>
                      <FaMinus />
                    </div>
                  </Button>
                  <div>{getItemQty(id).quantity}</div>
                  <Button
                    className={classes.variantBtn}
                    variant="contained"
                    color="secondary"
                    onClick={() => addToCart(productId, vgrpId, id)}
                  >
                    <div className={classes.btnInnerBox}>
                      <FaPlus />
                    </div>
                  </Button>
                </Box>
              </FormControl>
            </div>
          ))}
        </div>
      ))}
    </Paper>
  );
};

export default AddToCartModal;
