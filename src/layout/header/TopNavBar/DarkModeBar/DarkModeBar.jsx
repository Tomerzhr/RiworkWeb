import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../../../lottie/DarkMode.json";
import { Box } from "@mui/system";
import GlobalButton from "../../../../components/GlobalButton";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "../../../../providers/ThemeProvider";
import { Typography } from "@mui/material";

const DarkModeBar = () => {
  const { toggleDarkMode, toggleLightMode } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#212529",
    color: "white",
  };

  const TextStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    paddingLeft: "10px",
  };

  const TextContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const ButtonContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  //End of Css Style Section

  return (
    <Box sx={ContainerStyle}>
      <Box className="dark-mode-bar" style={TextContainerStyle}>
        <Player autoplay loop src={animationData} style={{ height: "40px", width: "40px" }}></Player>
        <Typography variant="p" sx={{ ...TextStyle, fontSize: { xs: "0.8rem", md: "1rem" } }}>
          Dark mode is now <span style={{ color: "#00ffaa", fontWeight: "500" }}>Available</span>
        </Typography>
      </Box>
      <Box sx={ButtonContainerStyle}>
        <GlobalButton node="Light" onClick={toggleLightMode} icon={<WbSunnyIcon sx={{ fontSize: { xs: "small", md: "medium" } }} />} />
        <GlobalButton
          node="Dark"
          onClick={toggleDarkMode}
          background="black"
          icon={<NightlightIcon sx={{ fontSize: { xs: "small", md: "medium" } }} />}
        />
      </Box>
    </Box>
  );
};

export default DarkModeBar;
