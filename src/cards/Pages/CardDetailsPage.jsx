import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCard from "../../cards/hooks/useCards";
import { useEffect } from "react";
import CardDetails from "../components/CardDetails";
import { Box } from "@mui/material";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const {
    value: { card },
    handelGetCard,
  } = useCard();

  useEffect(() => {
    handelGetCard(cardId);
  }, [cardId, handelGetCard]);

  return (
    <Box>
      <PageHeader title=" Business Card Details" description="This is the business details page." />
      <Box>{card && <CardDetails card={card} />}</Box>
    </Box>
  );
};

export default CardDetailsPage;
