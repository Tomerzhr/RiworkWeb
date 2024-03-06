import { Box } from "@mui/material";
import useCards from "../../../../cards/hooks/useCards";
import CardsFeedback from "../../../../cards/components/CardsFeedback";
import { useEffect } from "react";

import SectionHeader from "../SectionHeader";

function LatestCards() {
  const {
    value: { cards, loading, error },
    handelGetCards,
  } = useCards();

  useEffect(() => {
    handelGetCards();
  }, []);

  const latestCards = cards && cards.slice(0, 3);

  return (
    <Box>
      <SectionHeader title="Top Cards" subtitle="The top business cards in our platform" />
      <CardsFeedback loading={loading} error={error} cards={latestCards} />
    </Box>
  );
}

export default LatestCards;
