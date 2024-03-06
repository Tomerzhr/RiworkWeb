import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ color, to, children }) => {
  return (
    <Link to={to} style={{ color, textDecoration: "none" }}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  color: "inherit",
};

NavLink.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
