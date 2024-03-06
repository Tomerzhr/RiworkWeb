import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useUsers from "../../../../users/hooks/useUsers";

const MenuBar = ({ anchorEl, handleClose, open }) => {
  const { handelLogout } = useUsers();

  const onLogout = () => {
    handelLogout();
    handleClose();
  };

  //Css Style Section

  const style = {
    overflow: "visible",
    filter: "none",
    borderRadius: "20px",
  };

  //End of Css Style Section

  const match = window.matchMedia("(min-width: 900px)");

  if (match.matches) {
    return <DesktopMenu anchorEl={anchorEl} id="account-menu" open={open} onClick={onLogout} onClose={handleClose} style={style} />;
  } else {
    return <MobileMenu anchorEl={anchorEl} id="account-menu" onClick={onLogout} onClose={handleClose} open={open} sx={style} style={style} />;
  }
};

MenuBar.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
};

export default MenuBar;
