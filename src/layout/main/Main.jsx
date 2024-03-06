import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
  const { isDark } = useTheme();
  return <Box sx={{ minHeight: "85vh", backgroundColor: isDark ? "#0b1b27" : "#ecf1f9" }}>{children}</Box>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
