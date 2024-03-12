import { Box } from "@mui/system";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../../routes/routsModel";
import HeroBackground from "../../../../../assets/images/hero.jpg";

const HeroSection = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  //Css Style Section

  const ContainerStyle = {
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 30px 0 30px",
    overflow: "hidden",
    borderBottom: isDark ? "1px solid #dee9fe0f" : "1px solid #dee9fe",
    backgroundColor: isDark ? "#0c0c0c" : "#fff",
    zIndex: "1",
    "&:before": {
      content: '""',
      position: "absolute",
      left: "0",
      background: { HeroBackground },
      width: "476px",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      zIndex: "-1",
    },
  };

  //End of Css Style Section

  return (
    <Box sx={{ ...ContainerStyle, display: { xs: "inline-grid", sm: "flex", md: "flex" } }}>
      <LeftSection
        title="Bring all the services together"
        subtitle="A better experience and exposure to your business and for yourself."
        buttonText="Check it out"
        onClick={() => navigate(ROUTS.CARDS)}
      />
      <RightSection />
    </Box>
  );
};

export default HeroSection;
