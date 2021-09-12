import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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

const CartItem = ({
  price,
  quantity,
  line_total,
  removeFromCart,
  id,
  name,
  selected_options,
  product_id,
  media,
}) => {
  const classes = Styles();
  return (
    <Paper
      className={classes.root}
      style={{ padding: 10, marginBottom: 8, height: 110 }}
    >
      <div className={`${classes.root} ${classes.items}`}>
        <div style={{ width: "60px" }}>
          <Link to={`/product/${name}/${product_id}`}>
            <div>
              <img style={{ width: "100%" }} src={media.source} alt="Product" />
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
            <Typography variant="subtitle2" fontWeight="bold" component="h6">
              {name}
            </Typography>
            <Typography variant="caption" component="p">
              Size: {selected_options[0].option_name}
            </Typography>
          </div>
          <div style={{ height: 30 }}>
            {/* <Button color="secondary" startIcon={<HiOutlineHeart />}>
              Move to wishlist
            </Button> */}
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
      <div className={`${classes.quantity} ${classes.itemBox}`}>{quantity}</div>
      <Divider orientation="vertical" flexItem />
      <div className={`${classes.unitPrice} ${classes.itemBox}`}>
        {price.formatted_with_symbol}
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={`${classes.subTotal} ${classes.itemBox}`}>
        <Typography variant="h6" component="p" color="secondary">
          {line_total.formatted_with_symbol}
        </Typography>
      </div>
    </Paper>
  );
};

export default CartItem;
