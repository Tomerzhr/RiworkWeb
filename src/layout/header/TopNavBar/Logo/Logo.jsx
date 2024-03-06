import { Box } from "@mui/material";
import LogoImg from "../../../../../assets/images/riwork.svg";
import { useTheme } from "../../../../providers/ThemeProvider";
import NavLink from "../../../../components/NavLink";
import ROUTS from "../../../../routes/routsModel";

const Logo = () => {
  const { isDark } = useTheme();

  //Css Style Section

  const style = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0",
  };

  const HeadlineStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: isDark ? "white" : "#183b56",
    display: { xs: "none", md: "inline-flex" },
  };

  //End of Css Style Section

  return (
    <NavLink to={ROUTS.HOME}>
      <Box sx={style}>
        <img width="40px" src={LogoImg} alt="logo" />
        <h1 style={HeadlineStyle}>Riwork</h1>
      </Box>
    </NavLink>
  );
};

export default Logo;
