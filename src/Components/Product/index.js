import React from "react";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import logo from "../../img/product-placeholder.svg";

const Styles = makeStyles((theme) => ({
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
  placeholder: {
    height: 628,
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "left",
    "@media (max-width: 1280px)": {
      height: 540,
    },
  },
  inforHeading: {
    fontSize: ".875rem",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: "bold",
  },
  information: {
    padding: 10,
    width: "100%",
  },
  info_delivery: {
    padding: 10,
  },
}));

const Product = ({ children }) => {
  return (
    <Grid container spacing={2} style={{ minHeight: "567px", marginBottom: 8 }}>
      {children}
    </Grid>
  );
};

Product.View = ({ product, handleOpen }) => {
  const classes = Styles();
  return (
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
                        <Box fontWeight="fontWeightBold">{product.name}</Box>
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
                        Brand: Elengant
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
                        {product.variant_groups.map(({ id, options }, i) => (
                          <div key={id} className={classes.root}>
                            {options.map(({ id, name }) => (
                              <Chip key={id} clickable label={`size ${name}`} />
                            ))}
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={handleOpen}
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
                    <Box style={{ padding: "10px 0" }}>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        paragraph
                        component="div"
                      >
                        <Box fontWeight="fontWeightBold">PROMOTIONS</Box>
                      </Typography>
                      <Typography gutterBottom variant="body1" component="div">
                        Take R250 off your first Elegant order on the app*
                      </Typography>
                      <Typography gutterBottom variant="body1" component="div">
                        Free Delivery above R400*
                      </Typography>
                      <Typography gutterBottom variant="body1" component="div">
                        Free Returns*
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

Product.Placeholder = () => {
  const classes = Styles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.placeholder}></Paper>
    </Grid>
  );
};

Product.Information = () => {
  const classes = Styles();
  return (
    <Grid item xs={3}>
      <Paper>
        <div className={classes.information}>
          <h2 className={classes.inforHeading}>Delivery & Returns</h2>
        </div>
        <Divider />
        <div className={classes.info_delivery}>
          <h3 style={{ margin: 0, fontSize: "0.875rem", fontWeight: "bold" }}>
            Elegant Express
          </h3>
          <p style={{ margin: 0, fontSize: "0.875rem" }}>
            Express delivery in main cities
          </p>
        </div>
        <Divider />
      </Paper>
    </Grid>
  );
};

export default Product;
