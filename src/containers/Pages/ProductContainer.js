import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
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
  isCartUpdating,
}) => {
  const { id } = useParams();

  const [product, setProduct] = useState(false);
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
      .then((product) => setProduct(product, console.log(product, "product")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleClick = () => {
  //   console.info("You clicked the Chip.");
  // };

  return (
    <GlobalContainer>
      {product.hasOwnProperty("id") ? (
        <section style={{ marginTop: 76 }}>
          <CurrentPath />
          <Product product={product} handleClose={handleClose}>
            <Product.View product={product} handleOpen={handleOpen} />
            {/* <Product.Form /> */}
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
