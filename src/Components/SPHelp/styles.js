import { makeStyles } from "@material-ui/styles";
import logo from "../../img/helpBanner.svg";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: "16px",
    marginTop: `${76 + 16}px`,
    width: "100%",
    minHeight: "173px",
    padding: "10px",
  },
  banner: {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",
    height: 226,
    "@media (max-width: 1280px)": {},
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
  },
  gridArea: {
    display: "grid",
    gap: 16,
    width: "100%",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    fontSize: "4rem",
  },
  label: {
    fontWeight: 700,
    fontSize: 16,
  },
}));
