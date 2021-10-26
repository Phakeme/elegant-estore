import React from "react";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@material-ui/core";

const Contacts = () => {
  const Styles = makeStyles((theme) => ({
    footerContact: {
      height: 120,
      marginTop: 50,
      width: "100%",
      borderTop: "1px solid #585858",
      padding: "30px 0",
    },
    heading: {
      margin: "0 0 30px 0",
      fontSize: 13,
      fontWeight: 500,
      marginLeft: 5,
    },
    icon: {
      marginRight: 10,
    },
  }));
  const classes = Styles();
  return (
    <Grid container className={classes.footerContact}>
      <Grid item>
        <h4 className={classes.heading}>CONNECT WITH US</h4>
        <SocialIcon
          url="https://github.com/Phakeme"
          bgColor="#585858"
          className={classes.icon}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/phakeme-fakazi-331175112/"
          bgColor="#585858"
          className={classes.icon}
        />
        <SocialIcon
          url="https://twitter.com/phakemefakazi"
          bgColor="#585858"
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
};

export default Contacts;
