import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Likes = ({ children }) => {
  const style = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    height: "30px",
    background: "white",
    borderRadius: "15px",
    margin: "10px",
    zIndex: "1",
  };

  return (
    <Box sx={style}>
      <FavoriteIcon sx={{ color: "red", fontSize: 17 }} />
      <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: "500" }}>{children} </p>
    </Box>
  );
};

Likes.propTypes = {
  children: PropTypes.string,
};
export default Likes;
