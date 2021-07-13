import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
// import { commerce } from "../../lib/commerce";

const TopSellers = () => {
  // commerce.products.list().then((product) => console.log(product));
  alert(process.env.REACT_APP_CHEC_PUBLIC_KEY, "REACT_APP_CHEC_PUBLIC_KEY");
  return (
    <Container style={{ paddingTop: "16px" }}>
      <Paper style={{ width: "100%", height: "250px" }}></Paper>
    </Container>
  );
};

export default TopSellers;
