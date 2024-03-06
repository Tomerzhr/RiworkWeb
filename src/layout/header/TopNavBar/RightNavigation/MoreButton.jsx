import { Box } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PropTypes from "prop-types";
import { useTheme } from "../../../../providers/ThemeProvider";

const MoreButton = ({ handleClick }) => {
  const { isDark } = useTheme();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <DragHandleIcon onClick={handleClick} size="small" sx={{ ml: 2, color: isDark ? "white" : "black", cursor: "pointer" }}></DragHandleIcon>
    </Box>
  );
};
MoreButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MoreButton;
