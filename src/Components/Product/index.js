import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Divider } from "@material-ui/core";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
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
  cartlink: {
    color: theme.palette.secondary.main,
  },
}));

const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    commerce.products.retrieve(id).then((product) => setProduct(product));
  }, []);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

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
                <Box>
                  <Box>
                    {product.hasOwnProperty("name") && (
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            background: "",
                            height: "35px",
                          }}
                        >
                          <Typography variant="h6" component="h2">
                            <Box fontWeight="fontWeightBold">
                              {product.name}
                            </Box>
                          </Typography>
                          <Button
                            style={{
                              minWidth: "50px",
                              minHeight: "50px",
                              borderRadius: "50px",
                              fontSize: "25px",
                              top: "-10px",
                              right: "-10px",
                            }}
                            className={classes.cartlink}
                          >
                            <HiOutlineHeart />
                          </Button>
                        </Box>
                        <Box style={{ background: "", marginBottom: 10 }}>
                          <Typography variant="body2" component="h2">
                            Brand:
                          </Typography>
                          <Typography variant="body2" component="h2">
                            Rating(6)
                          </Typography>
                        </Box>
                        <Divider />
                        <Box style={{ padding: "10px 0" }}>
                          <Typography variant="h4" component="h2">
                            <Box fontWeight="fontWeightBold">
                              {product.price.formatted_with_symbol}
                            </Box>
                          </Typography>
                          <Typography variant="body2" component="h2">
                            + shipping from <em>R60</em> to Edenvale | 1609
                          </Typography>
                        </Box>
                        <Divider />
                        <Box style={{ padding: "10px 0" }}>
                          <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                          >
                            <Box fontWeight="fontWeightBold">
                              VARIATION AVAILABLE
                            </Box>
                          </Typography>
                          <div className={classes.root}>
                            {product.variant_groups.map(
                              ({ id, options }, i) => (
                                <div key={id} className={classes.root}>
                                  {options.map(({ id, name }) => (
                                    <Chip
                                      key={id}
                                      clickable
                                      label={`size ${name}`}
                                    />
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            fullWidth
                            style={{
                              color: "white",
                              margin: "15px 0 10px 0",
                            }}
                            startIcon={<MdAddShoppingCart />}
                          >
                            Add to cart
                          </Button>
                        </Box>
                        <Divider />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
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
