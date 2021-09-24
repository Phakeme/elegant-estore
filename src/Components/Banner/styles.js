import { makeStyles } from "@material-ui/styles";
import logo from "../../img/image-placeholders.jpg";

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
    "@media (max-width: 1280px)": {
      width: "150px",
    },
  },
  placeholder: {
    height: 257,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",
    "@media (max-width: 1280px)": {
      height: 207,
    },
  },
}));
