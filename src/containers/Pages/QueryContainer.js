import React from "react";
import { Banner, CurrentPath, Query, GlobalContainer } from "../../Components";

const QueryContainer = ({ sortedProducts, query, searchProducts }) => {
  return (
    <GlobalContainer>
      <Query
        sortedProducts={sortedProducts}
        query={query}
        searchProducts={searchProducts}
      >
        <CurrentPath />
        <Banner numOfProds={50} products={sortedProducts} />
      </Query>
    </GlobalContainer>
  );
};

export default QueryContainer;
