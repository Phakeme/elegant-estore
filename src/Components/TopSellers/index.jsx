import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { commerce } from "../../lib/commerce";

const TopSellers = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    commerce.products.list().then((product) => setProducts(product.data));
  }, []);

  return (
    <Container style={{ paddingTop: "16px" }}>
      <Paper style={{ width: "100%", minHeight: "250px", padding: "10px" }}>
        <Box
          spacin={0}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          {Array.isArray(products) &&
            products.slice(0, 6).map((product, i) => (
              <Box xs={2} key={i}>
                <Link
                  key={i}
                  to={`product/${product.name.split(" ").join("-")}/${
                    product.id
                  }`}
                >
                  <Card key={i} elevation={0}>
                    <CardActionArea key={i}>
                      {product.assets.slice(0, 1).map((image, i) => (
                        <CardMedia
                          key={i}
                          style={{ height: "auto", width: "100%" }}
                          component="img"
                          alt="Product"
                          image={image.url}
                        />
                      ))}
                      <div style={{ fontSize: "12px", margin: "5px" }}>
                        {product.name.length > 22
                          ? product.name.substring(0, 30).trim() + "..."
                          : product.name}
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          margin: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        {product.price.formatted_with_symbol}
                      </div>
                    </CardActionArea>
                  </Card>
                </Link>
              </Box>
            ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default TopSellers;
