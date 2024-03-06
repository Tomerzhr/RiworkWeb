import { Box } from "@mui/material";
import { useTheme } from "../../../providers/ThemeProvider";
import PropTypes from "prop-types";

function SectionHeader({ title, subtitle }) {
  const { isDark } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    padding: "20px",
    textAlign: "center",
  };

  const HeadlineStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: isDark ? "white" : "black",
  };

  //End of Css Style Section

  return (
    <Box sx={ContainerStyle}>
      <h2 style={HeadlineStyle}>{title}</h2>
      <h4 style={{ color: "#5c76a0" }}>{subtitle}</h4>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeader;
