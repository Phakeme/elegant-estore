import React from "react";
import { Banner, Query } from "../../Components";
import GlobalContainer from "../../Components/utils/Container";

const QueryContainer = ({ sortedProducts, query }) => {
  console.log(sortedProducts, "From sortedProducts");
  return (
    <GlobalContainer>
      <Query sortedProducts={sortedProducts} query={query}>
        <Banner numOfProds={50} products={sortedProducts} />
      </Query>
    </GlobalContainer>
  );
};

export default QueryContainer;
