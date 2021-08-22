import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Styles = makeStyles((theme) => ({
  root: {
    height: "392px",
    marginBottom: 8,
    marginTop: `${76 + 8}px`,
  },
  paper: {
    height: "100%",
  },
  control: {
    padding: theme.spacing(2),
  },
  link: {
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
  informativeLinks: {
    "@media (max-width: 1280px)": {
      display: "none",
    },
  },
}));

const Hero = ({ children }) => {
  const classes = Styles();
  return (
    <Grid container spacing={2} className={classes.root} style={{}}>
      {children}
    </Grid>
  );
};

Hero.Categories = ({ categories }) => {
  const classes = Styles();
  return (
    <Grid item lg={2} xs={3} className={classes.categories}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label="main categories">
          {Array.isArray(categories) &&
            categories.map(({ name, icon, path }, i) => (
              <Link to={path} key={i}>
                <ListItem
                  button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "8px",
                    height: "32px",
                  }}
                  className={classes.link}
                >
                  <span
                    style={{
                      width: "20px",
                      fontSize: "20px",
                    }}
                  >
                    {icon}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: ".80rem",
                      padding: " 0 0 4px 4px",
                    }}
                  >
                    {name}
                  </span>
                </ListItem>
              </Link>
            ))}
        </List>
      </Paper>
    </Grid>
  );
};

Hero.ImageSlide = ({ children }) => {
  const classes = Styles();
  return (
    <Grid item lg={8} xs={9}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

Hero.InformativeLinks = ({ children }) => {
  const classes = Styles();
  return (
    <Grid item lg={2} className={classes.informativeLinks}>
      <Box
        style={{
          display: "grid",
          gridTemplateRows: "180px 1fr",
          gap: "16px",
          height: "100%",
        }}
      >
        <Box flexGrow={1}>
          <Paper
            style={{
              height: "100%",
              marginBottom: "16px",
              padding: "10px 5px",
            }}
          >
            <Box
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr 1fr",
                gap: "0px",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </Box>
          </Paper>
        </Box>
        <Box flexGrow={1}>
          <Link to="/address">
            <Paper
              style={{
                height: "100%",
                backgroundImage: "url(./images/Top-Right.gif)",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Hero;
