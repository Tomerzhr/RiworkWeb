import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "../providers/ThemeProvider";

const NavItem = ({ label, to, color }) => {
  const { isDark } = useTheme();

  //Css Style Section

  const style = {
    fontFamily: "Montserrat, sans-serif",
    color: isDark ? "#a5afc1" : "black",
    fontWeight: "500",
    curser: "pointer",
  };

  //End of Css Style Section

  return (
    <NavLink to={to} style={{ color, textDecoration: "none" }}>
      <Typography sx={style}>{label}</Typography>
    </NavLink>
  );
};

NavItem.defaultProps = {
  color: "black",
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default NavItem;
