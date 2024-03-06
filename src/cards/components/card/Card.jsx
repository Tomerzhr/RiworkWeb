import { Box } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import PropTypes from "prop-types";
import { useTheme } from "../../../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../routes/routsModel";
import { useUser } from "../../../users/providers/UserProviders";
import { useState } from "react";

const CardComponent = ({ card, onDeleteCard, onLikeCard }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();
  const [isLikeCard, setLikeCard] = useState(() => !!user && !!card.likes.find((id) => id === user._id));

  const handelLikeState = () => {
    setLikeCard(!isLikeCard);
  };

  const style = {
    padding: " 10px",
    width: "290px",
    maxHeight: "650px",
    boxShadow: " 0 0 10px 0 rgba(0, 0, 0, 0.1)",
    background: isDark ? "#183b56" : "#fff",
    borderRadius: "20px",
    transition: " all 0.3s ease-in-out",
    img: { transition: " all 0.3s ease-in-out" },
    "&:hover": {
      transform: "translateY(-5px)",
      img: {
        transform: "scale(1.02)",
      },
    },
  };

  return (
    <Box sx={style}>
      <Box sx={{ cursor: "pointer" }} onClick={() => navigate(`${ROUTS.CARD_DETAILS}/${card._id}`)}>
        <CardHead image={card.image} isLikeCard={isLikeCard} />
        <CardBody info={card} />
      </Box>
      <CardActionBar {...{ card, onDeleteCard, onLikeCard, handelLikeState }} />
    </Box>
  );
};

CardComponent.propTypes = {
  card: PropTypes.object,
  onDeleteCard: PropTypes.func,
  onLikeCard: PropTypes.func.isRequired,
};

export default CardComponent;
