import React from "react";
import { Banner, CurrentPath, Query, GlobalContainer } from "../../Components";

const QueryContainer = ({
  sortedProducts,
  query,
  searchProducts,
  products,
}) => {
  return (
    <GlobalContainer>
      <Query
        sortedProducts={sortedProducts}
        query={query}
        searchProducts={searchProducts}
      >
        <CurrentPath />
        <Banner numOfProds={18} products={sortedProducts} />
      </Query>
      {/* {sortedProducts.length === 0 && (
        <NewArrivalsBanner products={products} title="New Arrivals" />
      )} */}
    </GlobalContainer>
  );
};

export default QueryContainer;
