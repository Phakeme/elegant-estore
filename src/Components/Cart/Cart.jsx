import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FaShoppingBasket } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { makeStyles } from "@material-ui/styles";
import CartItem from "./CartItem";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
  },
  header: {
    height: "30px",
    textTransform: "uppercase",
  },
  items: {
    width: "53.47%",
  },
  quantity: {
    width: "10.315%",
  },
  unitPrice: {
    width: "18.105%",
  },
  subTotal: {
    width: "18.105%",
  },
  actionBtns: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionBtn: {
    marginLeft: 10,
    color: theme.palette.primary.main,
    width: 250,
  },
}));

const Cart = ({ cart, removeFromCart, generateToken }) => {
  const classes = Styles();

  return (
    <div>
      <Box className={classes.container}>
        {cart.total_items ? (
          <div>
            <Typography variant="h5" paragraph component="h2">
              <Box>Cart: {cart.line_items.length} item(s)</Box>
            </Typography>
            <div className={`${classes.header} ${classes.root}`}>
              <div className={classes.items}>
                <Typography variant="subtitle2" paragraph component="h2">
                  <Box>Items</Box>
                </Typography>
              </div>
              <div className={classes.quantity}>
                <Typography
                  variant="subtitle2"
                  paragraph
                  component="h2"
                  align="center"
                >
                  <Box>Quantity</Box>
                </Typography>
              </div>
              <div className={classes.unitPrice}>
                <Typography
                  variant="subtitle2"
                  paragraph
                  component="h2"
                  align="center"
                >
                  <Box>Unit Price</Box>
                </Typography>
              </div>
              <div className={classes.subTotal}>
                <Typography
                  variant="subtitle2"
                  paragraph
                  component="h2"
                  align="center"
                >
                  <Box>SubTotal</Box>
                </Typography>
              </div>
            </div>
            <div style={{ minHeight: "110px" }}>
              <FormGroup>
                {cart.line_items.map(
                  (
                    {
                      product_id,
                      id,
                      name,
                      media,
                      line_total,
                      price,
                      quantity,
                      selected_options,
                    },
                    index
                  ) => (
                    <CartItem
                      line_total={line_total}
                      quantity={quantity}
                      name={name}
                      id={id}
                      removeFromCart={removeFromCart}
                      key={index}
                      product_id={product_id}
                      media={media}
                      price={price}
                      selected_options={selected_options}
                    />
                  )
                )}
                <div style={{ marginTop: "20px" }}>
                  <Typography variant="h5" component="p" align="right">
                    Total: {cart.subtotal.formatted_with_symbol}
                  </Typography>
                  <Typography variant="body1" component="p" align="right">
                    Shipping fees not included yet
                  </Typography>
                  <Paper style={{ padding: 10, marginTop: 15 }}>
                    <div className={classes.actionBtns}>
                      <div>
                        <Button
                          className={classes.actionBtn}
                          variant="contained"
                          color="secondary"
                          startIcon={<FaShoppingBasket />}
                        >
                          <Link to="/">Continue shopping</Link>
                        </Button>
                      </div>
                      <div>
                        <Button
                          className={classes.actionBtn}
                          variant="contained"
                          color="secondary"
                          startIcon={<FiCheckCircle />}
                          onClick={() => generateToken(cart.id)}
                        >
                          <Link to="#">Checkout</Link>
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </div>
              </FormGroup>
            </div>
          </div>
        ) : (
          <div>Your cart is empty</div>
        )}
      </Box>
    </div>
  );
};

export default Cart;
