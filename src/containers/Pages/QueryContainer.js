import React from "react";

import { Query } from "../../Components";

const QueryContainer = ({ sortedProducts, query }) => {
  console.log(sortedProducts, "From sortedProducts");
  return (
    <Query sortedProducts={sortedProducts} query={query} title="Search Page" />
  );
};

export default QueryContainer;
