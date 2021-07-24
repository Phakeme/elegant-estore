import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  description: {
    width: "180px",
    fontSize: "12px",
    margin: "5px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const ProductSummary = ({ products }) => {
  const classes = Styles();
  return (
    <Paper
      style={{
        marginTop: "16px",
        width: "100%",
        minHeight: "250px",
        padding: "10px",
      }}
    >
      <Box
        spacin={0}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {Array.isArray(products) &&
          products.slice(0, 6).map((product, i) => (
            <Box xs={2} key={i}>
              <Link
                key={i}
                to={`product/${product.name.split(" ").join("-")}/${
                  product.id
                }`}
              >
                <Card key={i} elevation={0}>
                  <CardActionArea key={i}>
                    {product.assets.slice(0, 1).map((image, i) => (
                      <CardMedia
                        key={i}
                        style={{ height: "auto", width: "100%" }}
                        component="img"
                        alt="Product"
                        image={image.url}
                      />
                    ))}
                    <div className={classes.description}>{product.name}</div>
                    <div
                      style={{
                        fontSize: "16px",
                        margin: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {product.price.formatted_with_symbol}
                    </div>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          ))}
      </Box>
    </Paper>
  );
};

export default ProductSummary;
