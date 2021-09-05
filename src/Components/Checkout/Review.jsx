import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const OrderSummary = ({ checkoutData }) => {
  const localData = localStorage.getItem("checkoutData");

  if (!checkoutData) checkoutData = JSON.parse(localData);

  return (
    checkoutData ?
    <Paper style={{ padding: 10 }}>
    <Box style={{ padding: 0 }}>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontSize: 14, fontWeight: 500 }}>ORDER SUMMARY</span>
      </div>
      <Divider />
      <List disablePadding>
        {checkoutData &&
          checkoutData.live.line_items.map((product, index) => (
            <ListItem style={{ padding: "10px 0" }} key={index}>
              <div>
                <img
                  style={{ height: 80, marginRight: 10 }}
                  src={product.media.source}
                  alt=""
                />
              </div>
              <ListItemText
                primary={product.name}
                secondary={`Qty:${product.quantity}, Size: ${product.selected_options[0].option_name}, Price: ${product.price.formatted_with_symbol}`}
              />
            </ListItem>
          ))}
        <Divider />
        <ListItem style={{ padding: " 0 10px" }}>
          <ListItemText primary="Total:" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutData && checkoutData.live.total.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </Box> </Paper>: null
  );
};

export default OrderSummary;
