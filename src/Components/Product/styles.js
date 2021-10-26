import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  navigation: {
    marginRight: "8px",
  },
  mainPaper: {
    minHeight: "551px",
    padding: "16px",
    marginBottom: 16,
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  cartlink: {
    color: theme.palette.secondary.main,
  },
  placeholder: {
    height: 551,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      height: 540,
    },
  },
  icon: {
    fontSize: "1.5rem",
    color: theme.palette.secondary.main,
    margin: "5px 0 0 0px",
    width: "100%",
  },
  inforHeading: {
    fontSize: ".875rem",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: "bold",
  },
  information: {
    height: 40,
    padding: 10,
    width: "100%",
  },
  info_delivery: {
    padding: "20px 10px",
  },
  delivery: {
    padding: 10,
  },
}));
