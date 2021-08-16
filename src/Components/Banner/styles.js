import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "16px",
    width: "100%",
    minHeight: "250px",
    padding: "10px",
  },
  description: {
    width: "180px",
    fontSize: "12px",
    margin: "5px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
