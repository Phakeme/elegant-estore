import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { HiOutlineHeart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { makeStyles } from "@material-ui/styles";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    maxWidth: "950px",
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
  itemBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Cart = ({ cart, removeFromCart }) => {
  const classes = Styles();

  return (
    <div>
      <Box className={classes.container}>
        {cart.hasOwnProperty("id") && (
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
                    <Paper
                      key={index}
                      className={classes.root}
                      style={{ padding: 10, marginBottom: 8, height: 110 }}
                    >
                      <div
                        className={`${classes.root} ${classes.items}`}
                        // style={{ background: "blue" }}
                      >
                        <div style={{ width: "60px" }}>
                          <Link to={`/product/${name}/${product_id}`}>
                            <div>
                              <img
                                style={{ width: "100%" }}
                                src={media.source}
                                alt="Product"
                              />
                            </div>
                          </Link>
                        </div>
                        <div style={{ marginLeft: 10 }}>
                          <div
                            style={{
                              height: 60,
                              paddingBottom: "10px",
                            }}
                          >
                            <Typography variant="caption" component="p">
                              Seller: Elegent
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              fontWeight="bold"
                              component="h6"
                            >
                              {name}
                            </Typography>
                            <Typography variant="caption" component="p">
                              Size: {selected_options[0].option_name}
                            </Typography>
                          </div>
                          <div style={{ height: 30 }}>
                            <Button
                              color="secondary"
                              startIcon={<HiOutlineHeart />}
                            >
                              Move to wishlist
                            </Button>
                            <Button
                              color="secondary"
                              startIcon={<AiFillDelete />}
                              onClick={() => removeFromCart(id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className={`${classes.quantity} ${classes.itemBox}`}>
                        {quantity}
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div
                        className={`${classes.unitPrice} ${classes.itemBox}`}
                      >
                        {price.formatted_with_symbol}
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className={`${classes.subTotal} ${classes.itemBox}`}>
                        <Typography
                          variant="h6"
                          component="p"
                          color="secondary"
                        >
                          {line_total.formatted_with_symbol}
                        </Typography>
                      </div>
                    </Paper>
                  )
                )}
                <div style={{ marginTop: "20px" }}>
                  <Typography variant="h5" component="p" align="right">
                    Total: {cart.subtotal.formatted_with_symbol}
                  </Typography>
                  <Typography variant="body1" component="p" align="right">
                    Shipping fees not included yet
                  </Typography>
                  <Paper style={{ padding: 10, marginTop: 15, height: 50 }}>
                    Text
                  </Paper>
                </div>
              </FormGroup>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Cart;
