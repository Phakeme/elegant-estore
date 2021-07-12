import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineInbox } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";

const links = [
  { title: "Account", path: "/account", icon: <FaRegUser /> },
  { title: "My Order", path: "/my-order", icon: <AiOutlineInbox /> },
  { title: "Wishlist", path: "/wishlist", icon: <AiOutlineHeart /> },
];

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
const DropDownLink = () => {
  const classes = useStyles();
  return (
    <Box style={{ height: "30px" }}>
      {links.map(({ icon, title, path }, i) => (
        <div key={i} style={{ marginTop: "5px" }}>
          <Link to={path}>
            <Box
              className={classes.link}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ marginTop: 3, marginRight: 15, fontSize: "20px" }}>
                {icon}
              </div>
              <div style={{ fontSize: "12px" }}>{title}</div>
            </Box>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default DropDownLink;
