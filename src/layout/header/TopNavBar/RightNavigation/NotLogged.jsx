import { Box } from "@mui/material";
import GlobalButton from "../../../../components/GlobalButton";
import ROUTS from "../../../../routes/routsModel";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../providers/ThemeProvider";

const NotLogged = () => {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const { isDark } = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
      <GlobalButton
        background="none"
        color={isDark ? "white " : "black"}
        node="Login"
        onClick={() => {
          navigateTo(ROUTS.LOGIN);
        }}
      />
      <GlobalButton
        background="black"
        node="Sign Up"
        onClick={() => {
          navigateTo(ROUTS.SIGNUP);
        }}
      />
    </Box>
  );
};

export default NotLogged;
