import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles";

const Thumbnails = ({ thumbnails, searchProducts }) => {
  const classes = Styles();
  return (
    <div className={classes.fluidBox}>
      <Paper className={classes.paper}>
        <Grid container spacing={0} style={{ height: "100%" }}>
          {thumbnails.map(({ icon, path, title }, index) => (
            <Grid key={index} item xs={2} onClick={() => searchProducts(path)}>
              <Link to={`/search/${path}`}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    style={{ marginBottom: 10, width: "100%" }}
                    src={icon}
                    alt=""
                  />
                  <span className={classes.thumbnailsTitle}>{title}</span>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Thumbnails;
