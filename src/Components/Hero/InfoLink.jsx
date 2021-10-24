import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const InfoLink = ({ path, icon, title, subTitle }) => {
  return (
    <Link to={path}>
      <Box style={{ display: "flex", width: "100%" }}>
        <Box style={{ marginRight: "5px" }}>
          <img src={icon} alt={title} />
        </Box>
        <Box>
          <div style={{ fontSize: "13px", fontWeight: "bold" }}>{title}</div>
          <div style={{ fontSize: "11px" }}>{subTitle}</div>
        </Box>
      </Box>
    </Link>
  );
};

export default InfoLink;
