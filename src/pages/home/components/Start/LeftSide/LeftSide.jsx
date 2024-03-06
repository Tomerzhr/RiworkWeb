import PropTypes from "prop-types";
import { Box } from "@mui/system";
import GlobalButton from "../../../../../components/GlobalButton";

const LeftSide = ({ title, subtitle, buttonText, onClick }) => {
  //Css Style Section

  const TitleStyle = {
    textAlign: "left",
    fontSize: "2.1rem",
    fontWeight: "700",
    color: "white",
  };
  const SubtitleStyle = {
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#5c76a0",
  };

  //End of Css Style Section

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <h1 style={TitleStyle}>{title}</h1>
      <h5 style={SubtitleStyle}>{subtitle}</h5>
      <GlobalButton node={buttonText} onClick={onClick} />
    </Box>
  );
};

LeftSide.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LeftSide;
