import { Box } from "@mui/material";
import PropTypes from "prop-types";
import CardButton from "../../../components/GlobalButton";
import { useUser } from "../../../users/providers/UserProviders";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../../routes/routsModel";
import useCards from "../../hooks/useCards";

const CardActionBar = ({ onDeleteCard, onLikeCard, card, handelLikeState }) => {
  const { user } = useUser();
  const { handelLikeCard } = useCards();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handelDialog = (term) => {
    if (term === "open") setDialogOpen(true);
    else setDialogOpen(false);
  };

  const handelDelete = () => {
    onDeleteCard(card._id);
    handelDialog("close");
  };

  const handelLike = async () => {
    handelLikeState();
    await handelLikeCard(card._id);
    await onLikeCard();
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  while (!user) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" disabled onClick={handelLike} />
          <CardButton node="Edit" disabled onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" disabled background="black" onClick={() => handelDialog("open")} />
        </Box>
      </>
    );
  }

  while ((user && user.isAdmin && user._id === card.user_id) || user.isAdmin) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" onClick={handelLike} />
          <CardButton node="Edit" onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" background="black" onClick={() => handelDialog("open")} />
        </Box>
        <CardDeleteDialog isDialogOpen={isDialogOpen} onDelete={handelDelete} onChangeDialog={() => handelDialog("close")} />
      </>
    );
  }
  while (user && user.isBusiness && user._id === card.user_id) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" onClick={handelLike} />
          <CardButton node="Edit" onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" background="black" onClick={() => handelDialog("open")} />
        </Box>
        <CardDeleteDialog isDialogOpen={isDialogOpen} onDelete={handelDelete} onChangeDialog={() => handelDialog("close")} />
      </>
    );
  }
  while (user && user.isBusiness) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" onClick={handelLike} />
          <CardButton node="Edit" disabled onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" disabled background="black" onClick={() => handelDialog("open")} />
        </Box>
        <CardDeleteDialog isDialogOpen={isDialogOpen} onDelete={handelDelete} onChangeDialog={() => handelDialog("close")} />
      </>
    );
  }
  while (user && user._id === card.user_id) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" onClick={handelLike} />
          <CardButton node="Edit" onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" background="black" onClick={() => handelDialog("open")} />
        </Box>
        <CardDeleteDialog isDialogOpen={isDialogOpen} onDelete={handelDelete} onChangeDialog={() => handelDialog("close")} />
      </>
    );
  }

  while (user) {
    return (
      <>
        <Box sx={containerStyle}>
          <CardButton node="Like" onClick={handelLike} />
          <CardButton node="Edit" disabled onClick={() => navigate(`${ROUTS.EDIT_CARD}/${card._id}`)} />
          <CardButton node="Delete" disabled background="black" onClick={() => handelDialog("open")} />
        </Box>
      </>
    );
  }
};

CardActionBar.propTypes = {
  onDeleteCard: PropTypes.func,
  onLikeCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  handelLikeState: PropTypes.func.isRequired,
};

export default CardActionBar;
