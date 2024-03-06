import { useEffect } from "react";
import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import ROUTS from "../../routes/routsModel";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import GlobalButton from "../../components/GlobalButton";

function MyCardsPage() {
  const {
    value: { cards, loading, error },
    handelGetMyCards,
    handelDeleteCard,
  } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTS.LOGIN);
    } else {
      handelGetMyCards();
    }
  }, [user]);

  const onDeleteCard = async (CardId) => {
    await handelDeleteCard(CardId);
    await handelGetMyCards();
  };

  return (
    <Box>
      <PageHeader title="My Cards" description="All your business Cards in one page" />
      <CardsFeedback loading={loading} error={error} cards={cards} onDeleteCard={onDeleteCard} />
      {cards && (
        <Box
          sx={{
            width: "100%",
            padding: "20px",
          }}>
          <GlobalButton onClick={() => navigate(ROUTS.CREATE_CARD)} node="Create Card" />
        </Box>
      )}
    </Box>
  );
}

export default MyCardsPage;
