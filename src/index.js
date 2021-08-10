import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { IconContext } from "react-icons";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f68b1e",
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#00A300",
        },
        "&$active": {
          color: "#f68b1e",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <IconContext.Provider value={{ size: "1rem" }}> */}
      <App />
      {/* </IconContext.Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
