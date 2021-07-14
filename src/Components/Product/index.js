import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id, slug } = useParams();
  useEffect(() => {
    console.log(id, slug, "useParams");
  }, []);
  return (
    <div>
      <h1>Product</h1>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
