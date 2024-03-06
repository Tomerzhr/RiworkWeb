import { Box } from "@mui/material";
import Likes from "./Likes";
import ImageType from "../../models/types/ImageType";
import PropTypes from "prop-types";

const CardHead = ({ image, isLikeCard }) => {
  const { url, alt } = image;

  const style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "20px",
  };

  return (
    <Box>
      {isLikeCard ? <Likes>Like</Likes> : null}

      <Box sx={{ overflow: "hidden", borderRadius: "20px" }}>
        <img style={style} src={url} alt={alt} />
      </Box>
    </Box>
  );
};
CardHead.propTypes = {
  image: ImageType.isRequired,
  isLikeCard: PropTypes.bool.isRequired,
};

export default CardHead;
