import React, { useState, useEffect } from "react";
import {
  Hero,
  HeroCarousel,
  Banner,
  Thumbnails,
  DoubleBanner,
  SingleBanner,
  InfoLink,
  Top4Links,
} from "../../Components";
import { commerce } from "../../lib/commerce";
import categories from "../../Data/categories";
import thumbnails from "../../Data/thumbnails";
import GlobalContainer from "../../Components/utils/Container";

const HomeContainer = ({loading}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    commerce.products
      .list()
      .then((product) =>
        setProducts(
          product.data,
          console.log(product, "console.log(product.data)")
        )
      );
  }, []);
  return (
    <GlobalContainer>
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
      <Top4Links />
      <Banner products={products} loading={loading} title="Our Top Sellers" />
      <DoubleBanner />
      <Banner products={products} title="Recently viewed" />
      <Thumbnails thumbnails={thumbnails} />
      <SingleBanner />
    </GlobalContainer>
  );
};

export default HomeContainer;
