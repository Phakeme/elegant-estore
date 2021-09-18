import React from "react";
import { SPHelp, GlobalContainer } from "../../Components";
import faq from "../../Data/faq";

const FaqContainer = ({ sortedProducts, query }) => {
  return (
    <GlobalContainer>
      <SPHelp qaItems={faq}>{console.log(faq, "Conatiner: faq")}</SPHelp>
    </GlobalContainer>
  );
};

export default FaqContainer;
