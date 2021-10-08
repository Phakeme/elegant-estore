import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  searchIcon: {
    padding: "1px 1px 1px 10px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: "10px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${30}px)`,
    transition: "",
    // width: "100%",
  },
  info: {
    minWidth: "200px",
  },
  search: {
    "@media (max-width: 959px)": {
      display: "none",
    },
  },
  appBar: {
    "@media (max-width: 959px)": {
      height: "110px",
    },
  },
  toolBar: {
    "@media (max-width: 959px)": {
      minHeight: "20px",
      marginBottom: 5,
    },
  },

  mobileSearch: {
    display: "none",
    "@media (max-width: 959px)": {
      width: "100%",
      display: "block",
    },
  },

  searchBtn: {
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  searchBox: {
    position: "relative",
    border: "1px solid #c8c8c8",
    borderRadius: "3px",
    backgroundColor: fade("#fff", 0.15),
    marginRight: 10,
    height: "40px",
    "@media (max-width: 600px)": {
      marginRight: 0,
    },
  },
}));
