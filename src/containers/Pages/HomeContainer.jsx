import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Hero, ProductsSummary } from "../../Components";
import { commerce } from "../../lib/commerce";

const HomeContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    commerce.products.list().then((product) => setProducts(product.data));
  }, []);
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Hero />
      <ProductsSummary products={products} />
    </Container>
  );
};

export default HomeContainer;
