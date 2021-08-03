import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Checkout } from "../../Components";
import { commerce } from "../../lib/commerce";

const CheckoutContainer = ({ cart, removeFromCart, generateToken }) => {
  const [provinces, setProvinces] = useState({});

  useEffect(() => {
    commerce.services
      .localeListSubdivisions("ZA")
      .then(({ subdivisions }) =>
        setProvinces(subdivisions, console.log(subdivisions, "provinces"))
      );
    // commerce.services
    //   .localeListCountries()
    //   .then((response) => console.log(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(provinces, "XXXXX");

  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <main style={{ maxWidth: "950px", margin: "auto" }}>
        <Checkout provinces={provinces} />
      </main>
    </Container>
  );
};

export default CheckoutContainer;
