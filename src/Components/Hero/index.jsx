import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import categories from "../../Data/categories";
import InfoLink from "./InfoLink";
import HeroCarousel from "./Carousel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
  link: {
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: `${76 + 8 + 8}px` }}>
      <Grid
        container
        spacing={2}
        className={classes.root}
        style={{ height: "392px" }}
      >
        {/* -------------- CATEGORIERS LINKS -------------- */}
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main categories">
              {categories.map(({ name, icon, path }, i) => (
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
        {/* -------------- MAIN HERO IMAGE SLIDER -------------- */}
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <HeroCarousel />
          </Paper>
        </Grid>
        {/* -------------- INFORMATIVE LINKS -------------- */}
        <Grid item xs={2}>
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
                  <InfoLink
                    path="/brands"
                    icon="./images/usp-africa.jpg"
                    title="WIDE VARIETY"
                    subTitle="Shop over 800 brands"
                  />
                  <InfoLink
                    path="/payments"
                    icon="./images/usp-cod.jpg"
                    title="SECURE PAYMENTS"
                    subTitle="Cards, Instant EFT & COD"
                  />
                  <InfoLink
                    path="/returns"
                    icon="./images/usp-returns.jpg"
                    title="FREE RETURNS"
                    subTitle="Easy & Fast Process"
                  />
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
      </Grid>
    </Container>
  );
};

export default Hero;
