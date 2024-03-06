import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "../providers/ThemeProvider";

const PageHeader = (props) => {
  const { isDark } = useTheme();
  const { title, description } = props;

    //Css Style Section 

  const HeadlineStyle = {
    margin: 0,
    fontSize: "2.9rem",
    fontWeight: "700",
    color: isDark ? "white" : "#183b56",
  };

  const ParagraphStyle = {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "500",
    color: isDark ? "white" : "#183b56",
  };

  const BoxStyle = {
    backgroundColor: isDark ? "#183b56" : "white",
    padding: "0 30px",
  };

  //End of Css Style Section
  

  return (
    <Box sx={BoxStyle}>
      <Box sx={{ padding: "50px 0" }}>
        <h1 style={HeadlineStyle}>{title}</h1>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ padding: "0  0 20px 0" }}>
        <p style={ParagraphStyle}>{description}</p>
      </Box>
    </Box>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageHeader;
