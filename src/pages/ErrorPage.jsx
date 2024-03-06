import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import GlobalButton from "../components/GlobalButton";
import ROUTS from "../routes/routsModel";
import { useTheme } from "../providers/ThemeProvider";
import { Box } from "@mui/system";

const ErrorPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);

  //Css Style Section

  const ContainerStyle = {
    padding: "20px 30px",
    color: isDark ? "white" : "",
  };

  //End of Css Style Section

  return (
    <Box>
      <PageHeader title="Error" description="Page not found" />
      <Box sx={ContainerStyle}>
        <h1 style={{ fontSize: "8rem", fontWeight: "600" }}>404</h1>
        <h4 style={{ color: isDark ? "white" : "" }}>Sorry, the page you are looking for does not exist.</h4>
        <GlobalButton
          node="Go back to homepage"
          onClick={() => {
            navigateTo(ROUTS.HOME);
          }}
        />
      </Box>
    </Box>
  );
};

export default ErrorPage;
