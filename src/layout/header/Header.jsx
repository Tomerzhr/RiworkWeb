import PropTypes from "prop-types";
import NavBar from "./TopNavBar/NavBar";
import DarkModeBar from "./TopNavBar/DarkModeBar/DarkModeBar";

const Header = () => {
  return (
    <>
      <DarkModeBar />
      <NavBar />
    </>
  );
};

Header.propTypes = {
  background: PropTypes.string,
};

export default Header;
