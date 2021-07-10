import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import {
  GiBabyFace,
  GiPencilBrush,
  GiHeartBottle,
  GiAlliedStar,
  GiTShirt,
} from "react-icons/gi";
import { BiHomeAlt, BiShoppingBag } from "react-icons/bi";
import { FaHeartbeat, FaShoppingCart } from "react-icons/fa";

const categories = [
  {
    name: "Women",
    path: "/mlp-women-fashion-trends",
    icon: <GrRestroomWomen />,
  },
  {
    name: "Men",
    path: "/mlp-men-fashion-trends",
    icon: <GrRestroomMen />,
  },
  {
    name: "Kids & Babies",
    path: "/kids",
    icon: <GiBabyFace />,
  },
  {
    name: "Homeware",
    path: "/kids",
    icon: <BiHomeAlt />,
  },
  {
    name: "Sport",
    path: "/",
    icon: <FaHeartbeat />,
  },
  {
    name: "Beauty",
    path: "/",
    icon: <GiPencilBrush />,
  },
  {
    name: "Grooming",
    path: "/",
    icon: <GiHeartBottle />,
  },
  {
    name: "Brands",
    path: "/",
    icon: <BiShoppingBag />,
  },
  {
    name: "New Arrivals",
    path: "/",
    icon: <GiAlliedStar />,
  },
  {
    name: "Sales & Deals",
    path: "/",
    icon: <FaShoppingCart />,
  },
  {
    name: "Fasion",
    path: "/",
    icon: <GiTShirt />,
  },
];

export default categories;
