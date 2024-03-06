import { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

function FavCardsPage() {
  const {
    value: { cards, loading, error },
    handelDeleteCard,
    handelGetFavCards,
  } = useCards();

  useEffect(() => {
    handelGetFavCards();
  }, []);

  const onDeleteCard = useCallback(async (cardId) => {
    await handelDeleteCard(cardId);
    await handelGetFavCards();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handelGetFavCards();
  }, []);

  return (
    <Box>
      <PageHeader title="Favorites Cards" description="Your favorite business cards" />
      <CardsFeedback loading={loading} error={error} cards={cards} onLikeCard={changeLikeStatus} handelDeleteCard={onDeleteCard} />
    </Box>
  );
}

export default FavCardsPage;
