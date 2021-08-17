import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: "16px",
    width: "100%",
    minHeight: "173px",
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
