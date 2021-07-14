import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Container from "@material-ui/core/Container";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((product) => setProduct(product), console.log(product, "Product"));
  }, []);

  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <h1>Product</h1>
      {product.hasOwnProperty("name") && (
        <div>
          <div>{product.name}</div>
          <div>{product.price.formatted_with_symbol}</div>
          <div>{product.description}</div>
          {product.assets.map((image, i) => (
            <img key={i} src={image.url} alt="product" />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Product;
