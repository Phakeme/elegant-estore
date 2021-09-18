import React from "react";
import SingleQA from "./SingleQA";

const FAQ = ({ qaItems }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
          textAlign: "center",
          height: "50px",
          fontWeight: "700px",
          marginTop: 50,
        }}
      >
        <h3>Frequently Asked Questions</h3>
      </div>
      {qaItems.map(({ question, answer }, i) => (
        <SingleQA key={i} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default FAQ;
