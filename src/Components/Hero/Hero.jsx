import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import categories from "../../Data/categories";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: "76px" }}>
      <Grid
        container
        spacing={2}
        className={classes.root}
        style={{ height: "392px" }}
      >
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <ul>
              {categories.map(({ name, icon, path }, i) => (
                <Link to={path} key={i}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "8px",
                      height: "32px",
                    }}
                  >
                    <span
                      style={{
                        // background: "yellow",
                        width: "20px",
                        fontSize: "20px",
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        fontSize: ".80rem",
                        padding: " 0 0 4px 4px",
                      }}
                    >
                      {name}
                    </span>
                  </div>
                </Link>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <p>Item 1</p>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <p>Item 1</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
