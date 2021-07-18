import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import {
  Hero,
  HeroCarousel,
  ProductsSummary,
  InfoLink,
} from "../../Components";
import { commerce } from "../../lib/commerce";
import categories from "../../Data/categories";

const HomeContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    commerce.products.list().then((product) => setProducts(product.data));
  }, []);

  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Hero>
        <Hero.Categories categories={categories} />
        <Hero.ImageSlide>
          <HeroCarousel />
        </Hero.ImageSlide>
        <Hero.InformativeLinks>
          <InfoLink
            path="/brands"
            icon="./images/usp-africa.jpg"
            title="WIDE VARIETY"
            subTitle="Shop over 800 brands"
          />
          <InfoLink
            path="/payments"
            icon="./images/usp-cod.jpg"
            title="SECURE PAYMENTS"
            subTitle="Cards, Instant EFT & COD"
          />
          <InfoLink
            path="/returns"
            icon="./images/usp-returns.jpg"
            title="FREE RETURNS"
            subTitle="Easy & Fast Process"
          />
        </Hero.InformativeLinks>
      </Hero>
      <ProductsSummary products={products} />
    </Container>
  );
};

export default HomeContainer;
