import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { commerce } from "../../lib/commerce";
import { Product } from "../../Components";

const ProductContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    commerce.products.retrieve(id).then((product) => setProduct(product));
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
      <Product product={product} addToCart={addToCart} />
    </Container>
  );
};

export default ProductContainer;
