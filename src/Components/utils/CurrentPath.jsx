import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const CurrentPath = () => {
  const location = useLocation();
  const { slug } = useParams();
  return (
    <Grid
      container
      justifycontent="center"
      style={{ fontSize: "0.875rem", color: "75757a", textAlign: "center" }}
    >
      <Grid item>
        <Link to="/">
          <p>Home </p>
        </Link>
      </Grid>
      <Grid item>
        <p style={{ width: 25 }}>{`>`}</p>
      </Grid>
      <Grid item>
        {slug ? <p>{slug}</p> : <p>{location.pathname.replace("/", "")}</p>}
      </Grid>
    </Grid>
  );
};

export default CurrentPath;
