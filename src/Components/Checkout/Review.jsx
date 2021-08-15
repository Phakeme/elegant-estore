import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const OrderSummary = () => {
  const localData = localStorage.getItem("checkoutData");
  const checkoutData = JSON.parse(localData);

  return (
    <>
      <Typography>Order Summary</Typography>
      <Divider />
      <List disablePadding>
        {checkoutData &&
          checkoutData.live.line_items.map((product, index) => (
            <ListItem style={{ padding: "10px 0" }} key={index}>
              <ListItemText
                primary={product.name}
                secondary={`Quantity: ${product.quantity}`}
              />
              <Typography variant="body2">
                {product.price.formatted_with_symbol}
              </Typography>
            </ListItem>
          ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutData && checkoutData.live.total.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default OrderSummary;
