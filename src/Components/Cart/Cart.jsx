import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { FaShoppingBasket } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { makeStyles } from "@material-ui/styles";
import CartItem from "./CartItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
    marginBottom: 16,
    marginTop: `${76 + 8 + 8}px`,
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
  const CurrentView = () => {
    if (!cart.hasOwnProperty("total_items")) {
      return (
        <div>
          <Typography variant="h5" paragraph component="h2">
            <Box data-testid="cart">Cart</Box>
          </Typography>
          <div>
            <div
              style={{
                display: "grid",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "white",
                  width: "150px",
                  height: "150px",
                  margin: "auto",
                  marginBottom: 52,
                  borderRadius: 150,
                }}
              >
                <CircularProgress color="secondary" />
              </div>
              <div>
                <h3>Loading...</h3>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (cart.total_items === 0) {
      return (
        <div>
          <Typography variant="h5" paragraph component="h2">
            <Box>Cart</Box>
          </Typography>
          <div>
            <div
              style={{
                display: "grid",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "50vh",
                marginBottom: 40,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    width: "150px",
                    height: "150px",
                    margin: "auto",
                    borderRadius: 150,
                  }}
                >
                  <GiShoppingCart fontSize={100} />
                </div>
                <div>
                  <h3>Your cart is empty!</h3>
                </div>
                <div>
                  <Link to="/">
                    <Button
                      style={{ color: "white" }}
                      variant="contained"
                      size="large"
                      color="secondary"
                    >
                      Start Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else
      return (
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
          <div style={{ minHeight: "50vh" }}>
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
                  Shipping fees included{" "}
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
                      <Link to="/checkout">
                        <Button
                          className={classes.actionBtn}
                          variant="contained"
                          color="secondary"
                          startIcon={<FiCheckCircle />}
                          onClick={() => generateToken(cart.id)}
                        >
                          Checkout
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Paper>
              </div>
            </FormGroup>
          </div>
        </div>
      );
  };

  return (
    <Box className={classes.container}>
      <CurrentView />
    </Box>
  );
};

export default Cart;
