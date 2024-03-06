import { Box } from "@mui/system";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import ROUTS from "../../../../routes/routsModel";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  //Css Style Section

  const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20vw",
    padding: "30px",
    borderBottom: "1px solid #dee9fe",
    background: "radial-gradient(100.04% 100.76% at 50.49% -0.76%, #29436d 0%, #050911 100%)",
  };

  //End of Css Style Section

  return (
    <Box sx={{ ...ContainerStyle, display: { xs: "inline-block", sm: "flex", md: "flex", alignItems: "center" } }}>
      <LeftSide
        title="Start your own collection card business"
        subtitle="riwork is a smart market contract which is used by multiple websites to provide the users the best possible experience."
        buttonText="Start Now"
        onClick={() => navigate(ROUTS.CREATE_CARD)}
      />
      <RightSide />
    </Box>
  );
};

export default Start;
