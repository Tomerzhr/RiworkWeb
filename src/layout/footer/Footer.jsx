import { Box, IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import YoutubeIcon from "@mui/icons-material/YouTube";
import Logo from "../header/TopNavBar/Logo/Logo";
import NavItem from "../../components/NavItem";
import { useTheme } from "../../providers/ThemeProvider";
import { useUser } from "../../users/providers/UserProviders";

const Footer = () => {
  const { isDark } = useTheme();
  const { user } = useUser();

  //Css Style Section

  const ContainerStyle = {
    background: isDark ? "#183b56" : "#fff",
    minHeight: "300px",
    borderBottom: isDark ? "1px solid #2c618c" : "1px solid #ebebeb",
    padding: "40px 30px",
  };

  const ParagraphStyle = {
    fontWeight: "500",
    margin: "10px 0",
    curser: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateX(5px)",
      color: isDark ? "white" : "#145ce7",
    },
  };

  const IconStyle = {
    color: "#5c76a0",
    background: isDark ? "" : "#ecf1f9",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    padding: "7px",
    margin: "15px 5px 30px 0",
    border: isDark ? "1px solid #214e70" : "1px solid white",
    transition: "all 0.6s ease",
    "&:hover": {
      border: "1px solid #ecf1f9",
      background: isDark ? "" : "white",
      curser: "pointer",
    },
  };

  const HeadlineStyle = {
    fontWeight: "600",
    color: isDark ? "white" : "black",
  };

  const CopyrightBoxStyle = {
    padding: "20px",
    textAlign: "center",
    fontSize: "0.8rem",
    color: isDark ? "#a5afc1" : "black",
    background: isDark ? "#183b56" : "#fff",
  };

  //End of Css Style Section

  return (
    <Box>
      <Grid container spacing={1} sx={ContainerStyle} textAlign="left" marginTop="-16px">
        <Grid item xs={12} sm={6} md={6}>
          <Logo />
          <p style={{ color: isDark ? "white" : "black" }}>riwork is a business platform for all the businesses</p>
          <IconButton sx={IconStyle} aria-label="facebook" href="http://www.facebook.com">
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton sx={IconStyle} aria-label="whatsapp" href="http://www.whatsapp.com">
            <WhatsAppIcon />
          </IconButton>
          <IconButton sx={IconStyle} aria-label="google+" href="http://www.google.co.il">
            <GoogleIcon />
          </IconButton>
          <IconButton sx={IconStyle} aria-label="youtube" href="http://www.youtube.com">
            <YoutubeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} sm={2} md={2} sx={{ "& p": ParagraphStyle, "& h3": HeadlineStyle }}>
          <h3>Main</h3>
          <NavItem label="Home" to="/home" />
          {user && (
            <>
              <NavItem label="Cards" to="/cards" />
              <NavItem label="Fav Cards" to="/fav-cards" />
            </>
          )}
          {user && user.isBusiness && (
            <>
              <NavItem label="My Cards" to="/my-cards" />
            </>
          )}
          {user && user.isAdmin && <NavItem label="Admin Panel" to="/admin" />}
          <NavItem label="Our Customers" to="/customers" />
        </Grid>
        <Grid item xs={6} sm={2} md={2} sx={{ "& p": ParagraphStyle, "& h3": HeadlineStyle }}>
          <h3>Assets</h3>
          {user && (
            <>
              <NavItem label="Profile" to="/profile" />
              <NavItem label="Activity" to="/activity" />
            </>
          )}
          {!user && <NavItem label="SignUp" to="/signup" />}
          <NavItem label="Join Us" to="/joinus" />
          <NavItem label="Other" to="/other" />
        </Grid>
        <Grid item xs={6} sm={2} md={2} sx={{ "& p": ParagraphStyle, "& h3": HeadlineStyle }}>
          <h3>Company</h3>
          <NavItem label="Services" to="/services" />
          <NavItem label="Therms" to="/therms" />
          <NavItem label="Contact Us" to="/contactus" />
          <NavItem label="About Us" to="/aboutus" />
        </Grid>
      </Grid>
      <Box sx={CopyrightBoxStyle}>
        <p>Copyright © 2024. Created with love by Tomer.</p>
      </Box>
    </Box>
  );
};

export default Footer;
