import React from "react";
import { SPHelp, GlobalContainer } from "../../Components";
import categories from "../../Data/categories";
import faq from "../../Data/faq";
import { Categories } from "../../Components";

const FaqContainer = ({ searchProducts }) => {
  return (
    <GlobalContainer>
      <SPHelp qaItems={faq}>
        <Categories categories={categories} searchProducts={searchProducts} />
      </SPHelp>
    </GlobalContainer>
  );
};

export default FaqContainer;
