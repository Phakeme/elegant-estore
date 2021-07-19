import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { commerce } from "../../lib/commerce";
import { Product } from "../../Components";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProductContainer = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((product) =>
        setProduct(product, console.log(product.categories, "product"))
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    commerce.cart
      .add(product.id, 1)
      .then((response) => console.log(response, "Response"));
  };

  // const handleClick = () => {
  //   console.info("You clicked the Chip.");
  // };

  return (
    <Container style={{ marginTop: `${76 + 8}px` }}>
      {product.hasOwnProperty("id") && (
        <Product product={product}>
          <Product.View product={product} handleOpen={handleOpen} />
          <Product.Form />
        </Product>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </Container>
  );
};

export default ProductContainer;
