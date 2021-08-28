import React from "react";
import { GiH2O } from "react-icons/gi";

const Query = ({ title, sortedProducts, query }) => {
  console.log(sortedProducts, "From Query Page");
  return (
    <div>
      <h1>{title}</h1>
      <h1>{title}</h1>
      {sortedProducts.length ? (
        <h1>{sortedProducts.length}</h1>
      ) : (
        <h2>{`No results found for ${query}`}</h2>
      )}
    </div>
  );
};

export default Query;
