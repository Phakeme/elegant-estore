import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Styles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    gridGap: 16,
    marginBottom: 16,
    marginTop: `${76 + 8}px`,
    "@media (max-width: 1280px)": {
      gridTemplateColumns: "1fr 5fr",
    },
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
  return <div className={classes.root}>{children}</div>;
};

Hero.Categories = ({ categories, searchProducts }) => {
  const classes = Styles();
  return (
    <div className={classes.categories}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label="main categories">
          {Array.isArray(categories) &&
            categories.map(({ name, icon, path }, i) => (
              <Link to={`/search/${path}`} key={i}>
                <div onClick={() => searchProducts(path)}>
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
                </div>
              </Link>
            ))}
        </List>
      </Paper>
    </div>
  );
};

Hero.ImageSlide = ({ children }) => {
  const classes = Styles();
  return (
    <div>
      <Paper className={classes.paper}>{children}</Paper>
    </div>
  );
};

Hero.InformativeLinks = ({ children }) => {
  const classes = Styles();
  return (
    <div className={classes.informativeLinks}>
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
          <Paper
            style={{
              height: "100%",
              backgroundImage: "url(./images/Top-Right.gif)",
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
