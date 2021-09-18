import React from "react";
import { SPHelp, GlobalContainer } from "../../Components";
import categories from "../../Data/categories";
import faq from "../../Data/faq";
import { Hero } from "../../Components";

const FaqContainer = () => {
  return (
    <GlobalContainer>
      <SPHelp qaItems={faq}>
        <Hero.Categories categories={categories} />
      </SPHelp>
    </GlobalContainer>
  );
};

export default FaqContainer;
