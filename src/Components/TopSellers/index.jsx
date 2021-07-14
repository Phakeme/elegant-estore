import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { commerce } from "../../lib/commerce";

const TopSellers = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    commerce.products.list().then((product) => setProducts(product.data));
  }, []);

  console.log(products, "Products");

  return (
    <Container style={{ paddingTop: "16px" }}>
      <Paper style={{ width: "100%", minHeight: "250px" }}>
        {Array.isArray(products) &&
          products.map((product, i) => (
            <div key={i}>
              <div>id: {product.id}</div>
              {product.assets.map((image, i) => (
                <img
                  style={{ height: "300px" }}
                  key={i}
                  src={image.url}
                  alt=""
                />
              ))}
            </div>
          ))}
      </Paper>
    </Container>
  );
};

export default TopSellers;
