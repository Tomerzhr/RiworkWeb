import { ClickAwayListener, MenuItem } from "@mui/material";
import { Divider, ListItemIcon } from "@mui/material";
import { Settings, Logout, PersonAdd } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../../routes/routsModel";
import Popper from "@mui/material/Popper";
import styled from "@mui/system/styled";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProviders";

const MobileMenu = ({ anchorEl, id, open, onClose, onClick }) => {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const { user } = useUser();
  const { isDark } = useTheme();

  //Css Style Section

  const StyledPopperDiv = styled("div")(() => ({
    backgroundColor: isDark ? "#183b56" : "white",
    borderRadius: 4,
    width: "100vw",
    margin: "1rem 0",
    padding: "1rem 0",
    borderBottom: "1px solid #ebebeb",
  }));

  const fontStyleMobile = {
    fontSize: "0.9rem",
    fontWeight: "500",
    fontFamily: "inherit",
    paddingLeft: "10vw",
    color: isDark ? "white" : "#183b56",
    "&:hover": {
      backgroundColor: isDark ? "#183b56" : "white",
      color: isDark ? "white" : "#145ce7",
    },
  };

  //End of Css Style Section

  return (
    <Popper anchorEl={anchorEl} id={id} open={open} sx={{ zIndex: "4" }} onClick={onClose}>
      <ClickAwayListener onClickAway={onClose}>
        <StyledPopperDiv>
          {user && user.isBusiness && (
            <>
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.CARDS);
                }}>
                Cards
              </MenuItem>
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.FAV_CARDS);
                }}>
                Favorite Cards
              </MenuItem>
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.MY_CARDS);
                }}>
                My Cards
              </MenuItem>
            </>
          )}
          {user && user.isAdmin && (
            <MenuItem
              sx={fontStyleMobile}
              onClick={() => {
                navigateTo(ROUTS.ADMIN);
              }}>
              Admin
            </MenuItem>
          )}

          <MenuItem
            sx={fontStyleMobile}
            onClick={() => {
              navigateTo(ROUTS.ABOUT);
            }}>
            About
          </MenuItem>
          <MenuItem
            sx={fontStyleMobile}
            onClick={() => {
              navigateTo(ROUTS.CONTACT);
            }}>
            Contact
          </MenuItem>
          {user && (
            <Box>
              <Divider />
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.HOME);
                }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.HOME);
                }}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem sx={fontStyleMobile} onClick={onClick}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Box>
          )}
          {!user && (
            <Box>
              <Divider />
              <MenuItem
                sx={fontStyleMobile}
                onClick={() => {
                  navigateTo(ROUTS.SIGNUP);
                }}>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                Sign Up
              </MenuItem>
              <MenuItem
                sx={fontStyleMobile}
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
        </StyledPopperDiv>
      </ClickAwayListener>
    </Popper>
  );
};

MobileMenu.propTypes = {
  anchorEl: PropTypes.object,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
