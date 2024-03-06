import { Box } from "@mui/system";
import ServiceBox from "./ServiceBox/ServiceBox";
import SellingImg from "../../../../../assets/images/tag.png";
import ExposureImg from "../../../../../assets/images/exposure.png";
import BuyingImg from "../../../../../assets/images/shopping-cart.png";
import { useTheme } from "../../../../providers/ThemeProvider";
import SectionHeader from "../SectionHeader";

const OurServices = () => {
  const { isDark } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    padding: "20px",
    borderBottom: isDark ? "1px solid #dee9fe0f" : "1px solid #dee9fe",
    textAlign: "center",
  };

  const BoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  //End of Css Style Section

  return (
    <Box sx={ContainerStyle}>
      <SectionHeader
        title="Our Services"
        subtitle="Learn more about riwork services, chat with the team, other people in the community, and express your opinion on the future development of riwork."
      />
      <Box sx={{ ...BoxStyle, display: { xs: "inline-block", sm: "flex", md: "flex", alignItems: "center" } }}>
        <ServiceBox title="Selling" subtitle="Selling your business without working hard" image={SellingImg} />
        <ServiceBox title="Buying" subtitle="buying services of local businesses" image={BuyingImg} />
        <ServiceBox title="Exposure" subtitle="Exposure your business in easy way" image={ExposureImg} />
      </Box>
    </Box>
  );
};

export default OurServices;
