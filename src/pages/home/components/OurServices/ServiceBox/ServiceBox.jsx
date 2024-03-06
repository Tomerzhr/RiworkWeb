import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useTheme } from "../../../../../providers/ThemeProvider";

const ServiceBox = ({ title, subtitle, image }) => {
  const { isDark } = useTheme();

  //Css Style Section

  const BoxStyle = {
    background: isDark ? "#183b56" : "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    margin: "30px",
    width: "80vw",
    minHeight: "290px",
    borderRadius: "10px",
    lineHeight: "1.7",
    cursor: "pointer",
    "&:hover .ImageBox": {
      transform: "translateY(-5px)",
    },
  };

  const headlineStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
    color: isDark ? "white" : "black",
  };

  const ImageBox = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: isDark ? "#204a6c" : "#edf3f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: " all 0.3s ease-in-out",
  };

  //End of Css Style Section

  return (
    <Box sx={BoxStyle}>
      <Box className="ImageBox" sx={ImageBox}>
        <img width="40px" src={image} alt="Service image" />
      </Box>
      <h3 style={headlineStyle}>{title}</h3>
      <p style={{ color: isDark ? "#5c76a0" : "black" }}>{subtitle}</p>
    </Box>
  );
};

ServiceBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ServiceBox;
