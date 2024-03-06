import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "@mui/material";

const Error = ({ errorMessage }) => {
  const { isDark } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    padding: "20px 30px",
    color: isDark ? "white" : "",
  };

  //End of Css Style Section

  return (
    <Box sx={ContainerStyle}>
      <Typography variant="h2" fontFamily={"inherit"} style={{ fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, fontWeight: "600" }}>
        Oops...
      </Typography>

      <Typography variant="p" fontFamily={"inherit"}>
        something went wrong: {errorMessage}
      </Typography>
    </Box>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};

export default Error;
