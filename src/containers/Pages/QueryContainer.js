import React from "react";
import { Link, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Banner, Query } from "../../Components";
import GlobalContainer from "../../Components/utils/Container";

const QueryContainer = ({ sortedProducts, query }) => {
  const location = useLocation()
  console.log(location, "location");
  return (
    <GlobalContainer>
      <Query sortedProducts={sortedProducts} query={query}>
        <Grid container justifyContent="center" style={{fontSize: '0.875rem', color: "75757a", textAlign: 'center'}}>
          <Grid item>
            <Link to="/">
              <p>Home </p>
            </Link>
          </Grid>
          <Grid item>
          <div>
              <p style={{width: 25, textAlign: 'center'}}> > </p>
          </div>
          </Grid>
          <Grid item>
              <p>{location.pathname.replace("/", "")}</p>
          </Grid>
        </Grid>
        <Banner numOfProds={50} products={sortedProducts} />
      </Query>
    </GlobalContainer>
  );
};

export default QueryContainer;
