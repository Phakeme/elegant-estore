import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { commerce } from "../../lib/commerce";
import { Product, AddToCartModal } from "../../Components";
import Modal from "@material-ui/core/Modal";

const ProductContainer = () => {
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

  // const addToCart = () => {
  //   commerce.cart
  //     .add(product.id, 1)
  //     .then((response) => console.log(response, "Response"));
  // };

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
        <AddToCartModal product={product} />
      </Modal>
    </Container>
  );
};

export default ProductContainer;
