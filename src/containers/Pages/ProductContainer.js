import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Product,
  AddToCartModal,
  GlobalContainer,
  CurrentPath,
} from "../../Components";
import Modal from "@material-ui/core/Modal";

const ProductContainer = ({
  cart,
  addToCart,
  decrementCart,
  getProduct,
  products,
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
      {product ? (
        <section style={{ marginTop: 76 }}>
          <CurrentPath />
          <Product product={product} handleClose={handleClose}>
            <Product.View product={product} handleOpen={handleOpen} />
          </Product>
        </section>
      ) : (
        <section style={{ margin: "76px 0 16px 0" }}>
          <CurrentPath />
          <Product.Placeholder />
        </section>
      )}
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
