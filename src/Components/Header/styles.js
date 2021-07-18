import { makeStyles } from "@material-ui/styles";

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
}));
