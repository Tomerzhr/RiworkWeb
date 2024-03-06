import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import LeftNavBar from "./LeftNavigation/LeftNavBar";
import RightNavBar from "./RightNavigation/RightNavBar";
import SearchBar from "../TopNavBar/RightNavigation/SearchBar";
import { useTheme } from "../../../providers/ThemeProvider";

const NavBar = () => {
  const { isDark } = useTheme();
  return (
    <Box sx={{ borderBottom: isDark ? "1px solid #2c618c" : "1px solid #ebebeb", background: isDark ? "#183b56" : "#fff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <SearchBar />
        </Box>
        <RightNavBar />
      </Toolbar>
    </Box>
  );
};

export default NavBar;
