import { Box, Divider } from "@mui/material";
import { useTheme } from "../../../providers/ThemeProvider";
import cardType from "../../models/types/CardType";
import propTypes from "prop-types";
import AddressType from "../../models/types/AddressType";
import { makeFirstLatterUpperCase } from "../../../forms/utils/algoMethod";

const CardBody = ({ info }) => {
  const { isDark } = useTheme();

  const {
    title,
    subtitle,
    phone,
    address: { street, houseNumber, city },
    email,
    web,
  } = info;

  const ParagraphStyle = {
    fontSize: "0.8rem",
    fontWeight: "400",
    padding: "5px 0",
  };

  const SpanStyle = {
    fontSize: "0.9rem",
    fontWeight: "600",
  };

  const HeadlineStyle = {
    margin: 0,
    fontSize: "1.3rem",
    fontWeight: "600",
    color: isDark ? "white" : "",
  };

  const SubtitleStyle = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: "500",
    color: isDark ? "white" : "",
  };

  return (
    <Box sx={{ padding: "15px 5px", width: "260px", height: "230px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      <h2 style={HeadlineStyle}>{makeFirstLatterUpperCase(title)}</h2>
      <h3 style={SubtitleStyle}>{makeFirstLatterUpperCase(subtitle)}</h3>
      <Divider sx={{ paddingBottom: 2 }} />
      <Box sx={{ color: "#6f7d95", padding: "15px 0" }}>
        <p style={ParagraphStyle}>
          <span style={SpanStyle}>Phone :</span> {phone}
        </p>
        <p style={ParagraphStyle}>
          <span style={SpanStyle}>Address :</span> {street} {houseNumber} {city}
        </p>
        <p style={ParagraphStyle}>
          <span style={SpanStyle}>Email :</span> {email}
        </p>
        <p style={ParagraphStyle}>
          <span style={SpanStyle}>Web :</span> {web}
        </p>
      </Box>
    </Box>
  );
};

CardBody.propTypes = {
  info: cardType.isRequired,
  address: propTypes.arrayOf(AddressType.isRequired),
};

export default CardBody;
