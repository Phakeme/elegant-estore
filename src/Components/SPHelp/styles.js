import { makeStyles } from "@material-ui/styles";
import logo from "../../img/helpBanner.svg";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: "16px",
    marginTop: `${76}px`,
    width: "100%",
    minHeight: "173px",
    padding: "10px",
    "@media (max-width: 960px)": {
      marginTop: `${76 + 46}px`,
    },
  },
  banner: {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",
    height: 226,
    "@media (max-width: 1280px)": {
      display: "none",
    },
  },
  main: {
    marginTop: "-80px",
    "@media (max-width: 1280px)": {
      marginTop: "0px",
    },
  },
  iconLink: {
    height: 220,
    maxWidth: 257.78,
    width: "100%",
    borderRadius: 5,
    padding: 10,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    background: theme.palette.grey[100],
    "@media (max-width: 1280px)": {
      borderRadius: 0,
    },
    "@media (max-width: 460px)": {
      height: 150,
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    fontSize: "4rem",
    "@media (max-width: 460px)": {
      fontSize: "2.5rem",
    },
  },
  label: {
    fontWeight: 700,
    fontSize: 16,
    "@media (max-width: 460px)": {
      fontSize: 11,
    },
  },
}));
