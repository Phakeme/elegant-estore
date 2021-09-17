import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: "16px",
    marginTop: `${76 + 16}px`,
    width: "100%",
    minHeight: "173px",
    padding: "10px",
  },
  banner: {
    background: theme.palette.secondary.main,
    height: 226,
    "@media (max-width: 1280px)": {},
  },
  iconLink: {
    height: 257.8,
    // width: "100%",
    background: theme.palette.grey[100],
  },
  gridArea: {
    display: "grid",
    gap: 8,
    gridTemplateAreas: '"z z z" "a a a" ',
  },
}));
