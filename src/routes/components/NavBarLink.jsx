import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarLink = ({ to, color, title }) => {
  return (
    <Link to={to} style={{ color, textDecoration: "none" }}>
      {title}
    </Link>
  );
};

NavBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NavBarLink.defaultProps = {
  color: "white",
};
export default NavBarLink;
