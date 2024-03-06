import { Box } from "@mui/system";
import GlobalButton from "../../../../../components/GlobalButton";
import PropTypes from "prop-types";
import { useTheme } from "../../../../../providers/ThemeProvider";
import { Typography } from "@mui/material";

const LeftSection = ({ title, subtitle, buttonText, onClick }) => {
  const { isDark } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "70%",
  };

  const TitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "left",
    fontSize: "3.8rem",
    fontWeight: "800",
    color: isDark ? "white" : "black",
  };
  const SubtitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "left",
    fontSize: "1.2rem",
    color: "#5c76a0",
  };

  //End of Css Style Section

  return (
    <Box sx={{ ...ContainerStyle, width: { xs: "100%", sm: "60%", md: "50%" } }}>
      <Typography variant="h1" sx={TitleStyle}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" sx={SubtitleStyle}>
        {subtitle}
      </Typography>
      <GlobalButton node={buttonText} onClick={onClick} />
    </Box>
  );
};

LeftSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LeftSection;
