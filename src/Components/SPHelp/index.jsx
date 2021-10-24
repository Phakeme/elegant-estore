import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FaLuggageCart, FaQuestionCircle } from "react-icons/fa";
import { GiHanger, GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import FAQ from "./Accordion";
import QALink from "./QALink";
import Styles from "./styles";
import { MarginTop } from "../";

const SPHelp = ({ qaItems, children }) => {
  const classes = Styles();
  const qALinks = [
    { label: "Products and Prices", icon: <FaLuggageCart /> },
    { label: "Orders", icon: <GiHanger /> },
    { label: "Payment", icon: <RiSecurePaymentLine /> },
    { label: "Returns and Refunds", icon: <GiReturnArrow /> },
    { label: "Delivery", icon: <GrDeliver /> },
    { label: "Other Enquiries", icon: <FaQuestionCircle /> },
  ];
  return (
    <MarginTop>
      <Paper className={classes.paper}>
        <div className={classes.banner}></div>
        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={12} md={8} className={classes.main}>
            <Grid container spacing={2} className={classes.boxes}>
              {qALinks.map(({ label, icon }, i) => (
                <QALink key={i} label={label} icon={icon} />
              ))}
            </Grid>
            <FAQ qaItems={qaItems} />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className={classes.label}>DISCOVER ELEGANT</h3>
            <hr />
            {children}
          </Grid>
        </Grid>
      </Paper>
    </MarginTop>
  );
};

export default SPHelp;
