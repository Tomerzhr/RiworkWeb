import { Stack } from "@mui/material";
import CardComponents from "./card/Card";
import EmptyCard from "./card/EmptyCards";
import propTypes from "prop-types";

const Cards = ({ cards, onDeleteCard, onLikeCard }) => {
  if (!cards.length) {
    return <EmptyCard />;
  }
  return (
    <Stack spacing={1} gap={2} direction="row" my={2} flexWrap="wrap" justifyContent="center" sx={{ paddingBottom: "20px" }}>
      {cards.map((card, index) => {
        return <CardComponents key={index} card={card} onDeleteCard={onDeleteCard} onLikeCard={onLikeCard} />;
      })}
    </Stack>
  );
};

Cards.propTypes = {
  cards: propTypes.array.isRequired,
  onDeleteCard: propTypes.func.isRequired,
  onLikeCard: propTypes.func.isRequired,
};

export default Cards;
