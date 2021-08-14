import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const OrderSummary = ({ checkoutToken }) => {
  return (
    <>
      <List disablePadding>
        {checkoutToken &&
          checkoutToken.live.line_items.map((product) => (
            <ListItem style={{ padding: "10px 0" }} key={product.name}>
              <ListItemText
                primary={product.name}
                secondary={`Quantity: ${product.quantity}`}
              />
              <Typography variant="body2">
                {product.line_total.formatted_with_symbol}
              </Typography>
            </ListItem>
          ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default OrderSummary;
