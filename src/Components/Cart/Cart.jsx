import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Styles = makeStyles((theme) => ({
  container: {
    maxWidth: "950px",
    margin: "auto",
  },
  header: {
    display: "flex",
    width: "100%",
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
}));

const Cart = ({ cart }) => {
  const classes = Styles();

  return (
    <div>
      <Box className={classes.container}>
        {cart.hasOwnProperty("id") && (
          <div>
            <Typography variant="h5" paragraph component="h2">
              <Box fontWeight="fontWeightBold">
                Cart: {cart.line_items.length} item(s)
              </Box>
            </Typography>
            <div className={classes.header}>
              <div className={classes.items}>
                <Typography variant="subtitle1" paragraph component="h2">
                  <Box fontWeight="fontWeightBold">Items</Box>
                </Typography>
              </div>
              <div className={classes.quantity}>
                <Typography variant="subtitle1" paragraph component="h2">
                  <Box fontWeight="fontWeightBold">Quantity</Box>
                </Typography>
              </div>
              <div className={classes.unitPrice}>
                <Typography variant="subtitle1" paragraph component="h2">
                  <Box fontWeight="fontWeightBold">Unit Price</Box>
                </Typography>
              </div>
              <div className={classes.subTotal}>
                <Typography variant="subtitle1" paragraph component="h2">
                  <Box fontWeight="fontWeightBold">SubTotal</Box>
                </Typography>
              </div>
            </div>
            <Paper style={{ minHeight: "110px", padding: 10 }}>
              <FormGroup>
                {cart.line_items.map(({ product_id, name, media }, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <div style={{ width: "60px" }}>
                      <Link
                        style={{ width: "60px" }}
                        to={`/product/${name}/${product_id}`}
                      >
                        <div>
                          <img
                            style={{ width: "100%" }}
                            src={media.source}
                            alt="Product"
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <div>{name}</div>
                      <div>Text</div>
                    </div>
                  </div>
                ))}
              </FormGroup>
            </Paper>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Cart;
