import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Divider } from "@material-ui/core";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  navigation: {
    marginRight: "8px",
  },
  mainPaper: {
    height: "100%",
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
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
      <Grid container spacing={2} style={{ height: "567px" }}>
        <Grid item xs={9}>
          <Paper className={classes.mainPaper} style={{ padding: "16px" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <Box>
                    <Carousel showThumbs useKeyboardArrows showStatus={false}>
                      {Array.isArray(product.assets) &&
                        product.assets.map((image, i) => (
                          <img key={i} src={image.url} alt="product" />
                        ))}
                    </Carousel>
                  </Box>
                  <Divider />
                  <Box>
                    <h2 style={{ fontSize: "14px", fontWeight: "bold" }}>
                      SHARE THIS PRODUCT
                    </h2>
                    <div style={{ fontSize: "30px" }}>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}
                      >
                        <RiFacebookCircleFill />
                      </a>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}
                      >
                        <AiFillTwitterCircle />
                      </a>
                    </div>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                text
              </Grid>
            </Grid>
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
