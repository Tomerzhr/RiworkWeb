import PropTypes from "prop-types";
import { Button } from "@mui/material";

const GlobalButton = ({ node, icon, background, color, onClick, disabled, component }) => {
  //Css Style Section

  const style = {
    color: color,
    background: background,
    fontFamily: "inherit",
    fontSize: "0.7rem",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: 20,
    border: "none",
    margin: "10px 5px",
    cursor: "pointer",
  };

  const DisabledStyle = {
    color: color,
    background: "grey",
    fontFamily: "inherit",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: 20,
    border: "none",
    margin: "10px 5px",
    cursor: "not-allowed", // Add a semicolon here
    opacity: "0.5",
  };

  //End of Css Style Section

  return (
    <Button
      style={disabled ? DisabledStyle : style}
      onClick={onClick}
      disabled={disabled}
      component={component}
      sx={{ padding: "6px 15px", fontSize: { xs: "0.7rem", md: "0.8rem" } }}>
      {icon}
      {node}
    </Button>
  );
};

GlobalButton.propTypes = {
  node: PropTypes.string.isRequired,
  icon: PropTypes.node,
  color: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  component: PropTypes.node,
};

GlobalButton.defaultProps = {
  background: "linear-gradient(to bottom, #1765fb, #1561f7, #145df4, #1259f0, #1155ec)",
  color: "white",
  disabled: false,
  component: "button",
};

export default GlobalButton;
