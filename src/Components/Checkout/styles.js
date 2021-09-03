import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
  },
  actionBtns: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionBtn: {
    marginLeft: 10,
    color: theme.palette.primary.main,
    width: 250,
  },
  icon: {
    fontSize: "1.5rem",
    color: theme.palette.secondary.main,
  },
  textField: {
    marginTop: 15,
  },
  formControl: {
    width: "100%",
    height: "100%",
  },
  stepper: {
    marginBottom: 16,
    height: 10,
  },
  btnNext: {
    margin: "16px 0",
    color: theme.palette.primary.main,
  },
}));
