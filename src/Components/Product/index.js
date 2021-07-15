import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  navigation: {
    marginRight: "8px",
  },
  mainPaper: {
    height: "100%",
  },
}));

const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    commerce.products.retrieve(id).then((product) => setProduct(product));
  }, []);

  return (
    <Container style={{ marginTop: `${76 + 8}px` }}>
      {console.log(product, "Product")}
      <Box style={{ marginBottom: "8px" }}>
        <Grid container>
          <Grid item>
            <Link to="/" className={classes.navigation}>
              Home
            </Link>
          </Grid>
          {Array.isArray(product.categories) &&
            product.categories.map(({ id, name }, i) => (
              <Grid item key={id}>
                <span> {`${" > "}`} </span>
                <Link to={`/`} className={classes.navigation}>{`${name}`}</Link>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Grid container spacing={2} style={{ minHeight: "400px" }}>
        <Grid item xs={9}>
          <Paper className={classes.mainPaper}>
            {product.hasOwnProperty("name") && (
              <div>
                {/* <div>{product.name}</div>
          <div>{product.price.formatted_with_symbol}</div>
          <div>{product.description}</div>
          {product.assets.map((image, i) => (
            <img key={i} src={image.url} alt="product" />
          ))} */}
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.mainPaper}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
