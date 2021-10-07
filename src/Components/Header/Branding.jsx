import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/elegant-logo.svg";

const Branding = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "40px",
      }}
    >
      <Link to="/">
        <img style={{ height: "80%" }} src={logo} alt="brand-logo" />
      </Link>
    </div>
  );
};

export default Branding;
