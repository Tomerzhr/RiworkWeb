import { Menu, MenuItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Settings, Logout, PersonAdd } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../../routes/routsModel";
import useUsers from "../../../../users/hooks/useUsers";

const DesktopMenu = ({ anchorEl, id, open, onClose, onClick, style }) => {
  const { user } = useUsers();
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);

  //Css Style Section

  const fontStyle = {
    fontSize: "0.9rem",
    fontWeight: "500",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: "white",
      color: "#145ce7",
    },
  };

  //End of Css Style Section

  return (
    <Menu anchorEl={anchorEl} id={id} open={open} onClose={onClose} onClick={onClose} sx={{ style }}>
      {user && (
        <Box>
          {/* <Typography variant="h6" align="center" sx={userStyle}>
            Hello {makeFirstLatterUpperCase(user.name.first)},
          </Typography> */}
          <MenuItem sx={fontStyle} onClick={onClose}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem sx={fontStyle} onClick={onClose}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem sx={fontStyle} onClick={onClick}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      )}
      {!user && (
        <Box>
          <MenuItem
            sx={fontStyle}
            onClick={() => {
              navigateTo(ROUTS.SIGNUP);
            }}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            Sign Up
          </MenuItem>
          <MenuItem
            sx={fontStyle}
            onClick={() => {
              navigateTo(ROUTS.LOGIN);
            }}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Sign in
          </MenuItem>
        </Box>
      )}
    </Menu>
  );
};

DesktopMenu.propTypes = {
  anchorEl: PropTypes.object,
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default DesktopMenu;
