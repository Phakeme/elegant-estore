import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { FaCaretDown } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";

const SingleQA = ({ answer, question }) => {
  const Styles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
  }));
  const classes = Styles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<FaCaretDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleQA;
