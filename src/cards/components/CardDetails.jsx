import { Box } from "@mui/system";
import { useTheme } from "../../providers/ThemeProvider";
import { object } from "prop-types";
import { Divider } from "@mui/material";

const CardDetails = ({ card }) => {
  const { isDark } = useTheme();
  const {
    title,
    subtitle,
    description,
    phone,
    web,
    email,
    address: { street, state, city, zip },
    image: { url, alt },
  } = card;

  const ContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    "& p": {
      color: isDark ? "#6f7d95" : "black",
      marginBottom: "10px",
    },
  };

  const HeadlineStyle = {
    fontWeight: "600",
    fontSize: "1.9em",
    color: isDark ? "white" : "black",
  };
  const SubtitleStyle = {
    fontWeight: "500",
    fontSize: "1.3em",
    marginBottom: "10px",
    color: isDark ? "white" : "#6f7d95",
  };
  const SectionStyle = {
    fontWeight: "500",
    fontSize: "1em",
    color: isDark ? "white" : "black",
  };

  const BoxStyle = {
    padding: " 5px",
    marginBottom: "20px",
    "& img": {
      width: "100%",
      border: "5px solid",
      borderColor: isDark ? "#183b56" : "#fff",
      borderRadius: "20px",
      boxShadow: " 0 0 10px 0 rgba(0, 0, 0, 0.1)",
      objectFit: "cover",
    },
  };

  return (
    <Box sx={ContainerStyle}>
      <Box sx={{ ...BoxStyle, width: { xs: "30vw", sm: "10vw", md: "10vw" } }}>
        <img src={url} alt={alt} />
      </Box>
      <h2 style={HeadlineStyle}>{title}</h2>
      <h3 style={SubtitleStyle}>{subtitle}</h3>
      <Divider sx={{ marginBottom: "10px", width: "150px" }} />
      <h4 style={SectionStyle}>About us</h4>
      <p>{description}</p>
      <Divider sx={{ marginBottom: "20px", width: "150px" }} />
      <h4 style={SectionStyle}>Our Address</h4>
      <p>
        {street},<br />
        {city}, {zip},<br />
        {state}
      </p>
      <p>
        <span style={SectionStyle}>Phone: </span>
        {phone}
      </p>
      <p>
        <span style={SectionStyle}>Email: </span>
        {email}
      </p>
      <h4 style={SectionStyle}>Our Website</h4>
      <p>{web}</p>
    </Box>
  );
};

CardDetails.propTypes = {
  card: object.isRequired,
};

export default CardDetails;
