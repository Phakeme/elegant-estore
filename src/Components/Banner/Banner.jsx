import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Styles from "./styles";

const Banner = ({ products, title, numOfProds, xs, getProduct }) => {
  const classes = Styles();
  let placeHolders = [];
  for (let i = 0; i < numOfProds; i++) {
    placeHolders.push("i");
  }
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {numOfProds > 6 && (
        <>
          <div style={{ marginBottom: 10 }}>
            <p style={{ paddingBottom: 20, margin: 0 }}>
              {products.length} product(s) found
            </p>
            <Divider />
          </div>
        </>
      )}
      <Grid container spacing={1}>
        {Array.isArray(products)
          ? products.slice(0, numOfProds).map((product, i) => (
              <Grid item xs={xs} key={i}>
                <Link
                  key={i}
                  to={`product/${product.name.split(" ").join("-")}/${
                    product.id
                  }`}
                >
                  <Card elevation={0}>
                    <CardActionArea key={i}>
                      {product.assets.slice(0, 1).map((image, i) => (
                        <CardMedia
                          key={i}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
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
              </Grid>
            ))
          : placeHolders.map((_, i) => (
              <Grid item xs={xs} key={i} className={classes.placeholder}></Grid>
            ))}
      </Grid>
    </Paper>
  );
};

Banner.defaultProps = {
  numOfProds: 6,
  xs: 2,
};

Banner.propTypes = {
  title: PropTypes.string,
  numOfProds: PropTypes.number,
  xs: PropTypes.number,
};

export default Banner;
