import React from "react";
import { Banner, CurrentPath, Query, GlobalContainer } from "../../Components";

const QueryContainer = ({ sortedProducts, query }) => {
  return (
    <GlobalContainer>
      <Query sortedProducts={sortedProducts} query={query}>
        <CurrentPath />
        <Banner numOfProds={50} products={sortedProducts} />
      </Query>
    </GlobalContainer>
  );
};

export default QueryContainer;
