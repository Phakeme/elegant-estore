import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormGroup } from "@material-ui/core";
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
}));

const Cart = ({ cart }) => {
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
                <Typography variant="subtitle2" paragraph component="h2">
                  <Box>Quantity</Box>
                </Typography>
              </div>
              <div className={classes.unitPrice}>
                <Typography variant="subtitle2" paragraph component="h2">
                  <Box>Unit Price</Box>
                </Typography>
              </div>
              <div className={classes.subTotal}>
                <Typography variant="subtitle2" paragraph component="h2">
                  <Box>SubTotal</Box>
                </Typography>
              </div>
            </div>
            <div style={{ minHeight: "110px" }}>
              <FormGroup>
                {cart.line_items.map(({ product_id, name, media }, index) => (
                  <Paper
                    key={index}
                    className={classes.root}
                    style={{ padding: 10, marginBottom: 8, height: 110 }}
                  >
                    <div className={`${classes.root} ${classes.items}`}>
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
                            Size: UK
                          </Typography>
                        </div>
                        <div style={{ background: "red", height: 30 }}>
                          Buttons
                        </div>
                      </div>
                    </div>
                  </Paper>
                ))}
              </FormGroup>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Cart;
