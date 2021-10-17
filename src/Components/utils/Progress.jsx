import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: 20 }}>
        <CircularProgress color="secondary" />
      </div>
      <div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Progress;
