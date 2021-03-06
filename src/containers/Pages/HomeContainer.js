import React from "react";
import {
  Hero,
  HeroCarousel,
  Banner,
  Thumbnails,
  DoubleBanner,
  SingleBanner,
  InfoLink,
  Top4Links,
  NewArrivalsBanner,
} from "../../Components";
import categories from "../../Data/categories";
import thumbnails from "../../Data/thumbnails";
import GlobalContainer from "../../Components/utils/Container";

const HomeContainer = ({ products, searchProducts }) => {
  return (
    <GlobalContainer>
      <Hero searchProducts={searchProducts}>
        <Hero.Categories
          categories={categories}
          searchProducts={searchProducts}
        />
        <Hero.ImageSlide>
          <HeroCarousel />
        </Hero.ImageSlide>
        <Hero.InformativeLinks>
          <InfoLink
            path="/sp-help"
            icon="./images/usp-africa.jpg"
            title="WIDE VARIETY"
            subTitle="Shop over 800 brands"
          />
          <InfoLink
            path="/sp-help"
            icon="./images/usp-cod.jpg"
            title="SECURE PAYMENTS"
            subTitle="Cards, Instant EFT & COD"
          />
          <InfoLink
            path="/sp-help"
            icon="./images/usp-returns.jpg"
            title="FREE RETURNS"
            subTitle="Easy & Fast Process"
          />
        </Hero.InformativeLinks>
      </Hero>
      <Top4Links searchProducts={searchProducts} />
      <Banner products={products} title="Our Top Sellers" />
      <DoubleBanner searchProducts={searchProducts} />
      <NewArrivalsBanner products={products} title="New Arrivals" />
      <Thumbnails thumbnails={thumbnails} searchProducts={searchProducts} />
      <SingleBanner searchProducts={searchProducts} />
    </GlobalContainer>
  );
};

export default HomeContainer;
