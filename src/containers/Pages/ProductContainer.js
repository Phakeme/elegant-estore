import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Product,
  AddToCartModal,
  GlobalContainer,
  CurrentPath,
  MarginTop,
} from "../../Components";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

const ProductContainer = ({
  cart,
  addToCart,
  decrementCart,
  getProduct,
  productError,
  loading,
  product,
  isCartUpdating,
}) => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContainer>
      <MarginTop>
        <CurrentPath />
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            {!loading ? (
              <Product product={product} handleClose={handleClose}>
                <Product.View
                  product={product}
                  productError={productError}
                  handleOpen={handleOpen}
                />
              </Product>
            ) : (
              <section>
                <Product.Placeholder />
              </section>
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            <Product.Information></Product.Information>
          </Grid>
        </Grid>
      </MarginTop>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <AddToCartModal
            handleClose={handleClose}
            addToCart={addToCart}
            decrementCart={decrementCart}
            product={product}
            cart={cart}
            isCartUpdating={isCartUpdating}
          />
        </div>
      </Modal>
    </GlobalContainer>
  );
};

export default ProductContainer;
