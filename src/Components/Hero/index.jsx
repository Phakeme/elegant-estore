import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Categories from "../utils/Categories";

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
    "@media (max-width: 1030px)": {
      marginBottom: 16,
      gridTemplateColumns: "1fr",
    },
    "@media (max-width: 960px)": {
      marginTop: `${76 + 8 + 37}px`,
    },
    "@media (max-width: 600px)": {
      marginBottom: 16,
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
  categories: {
    "@media (max-width: 1030px)": {
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
        <Categories categories={categories} searchProducts={searchProducts} />
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
