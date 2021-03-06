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
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  bannerDesktop: {
    marginTop: 16,
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  bannerMobile: {
    display: "none",
    "@media (max-width: 960px)": {
      display: "block",
    },
  },
  btnNext: {
    marginTop: "16px",
    color: theme.palette.primary.main,
  },
  paymentResults: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 396,
    width: "100%",
    textAlign: "center",
    padding: "10px 10px 30px 10px",
  },
  paymentIcon: {
    width: 100,
    height: 100,
    borderRadius: 250,
    background: theme.palette.secondary.main,
    margin: "20px auto",
    color: "white",
    textAlign: "center",
    fontSize: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textDecoration: {
    fontWeight: 500,
    color: theme.palette.secondary.main,
  },
}));
