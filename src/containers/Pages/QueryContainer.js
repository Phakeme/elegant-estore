import React from "react";
import { Query } from "../../Components";
import GlobalContainer from "../../Components/utils/Container";

const QueryContainer = ({ sortedProducts, query }) => {
  console.log(sortedProducts, "From sortedProducts");
  return (
    <GlobalContainer>
      <Query
        sortedProducts={sortedProducts}
        query={query}
        title="Search Page"
      />
    </GlobalContainer>
  );
};

export default QueryContainer;
