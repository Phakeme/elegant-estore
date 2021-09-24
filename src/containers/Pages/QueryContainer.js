import React from "react";
import {
  Banner,
  CurrentPath,
  Query,
  GlobalContainer,
  NewArrivalsBanner,
} from "../../Components";

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
        <Banner numOfProds={50} products={sortedProducts} />
      </Query>
      {sortedProducts.length === 0 && (
        <NewArrivalsBanner products={products} title="New Arrivals" />
      )}
    </GlobalContainer>
  );
};

export default QueryContainer;
