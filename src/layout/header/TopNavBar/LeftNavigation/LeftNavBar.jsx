import { Box } from "@mui/material";
import Logo from "../Logo/Logo";
import ROUTS from "../../../../routes/routsModel";
import NavItem from "../../../../components/NavItem";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProviders";

const LeftNavBar = () => {
  const { isDark } = useTheme();
  const { user } = useUser();

  //Css Style Section

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "30px",
  };

  const NavStyle = {
    marginRight: "20px",
    fontWeight: "500",
    curser: "pointer",
    color: isDark ? "white" : "black",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      color: isDark ? "white" : "#145ce7",
    },
  };

  //End of Css Style Section

  return (
    <Box sx={style}>
      <Logo />
      <Box sx={{ "& p": NavStyle, display: { xs: "none", md: "inline-flex" } }}>
        {user && (
          <>
            <NavItem to={ROUTS.CARDS} label="Cards" />
            <NavItem to="/fav-cards" label="Fav Cards" />
          </>
        )}
        {user && user.isBusiness && (
          <>
            <NavItem to="/my-cards" label="My Cards" />
          </>
        )}
        {user && user.isAdmin && <NavItem to="/admin" label="Admin" />}
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
      </Box>
    </Box>
  );
};

export default LeftNavBar;
