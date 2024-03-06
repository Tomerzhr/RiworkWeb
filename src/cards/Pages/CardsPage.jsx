/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../../cards/components/CardsFeedback";
import useCards from "../../cards/hooks/useCards";
import { useEffect } from "react";
import GlobalPagination from "../../components/GlobalPagination";

const CardsPage = () => {
  const {
    value: { cards, loading, error, filteredCards },
    currentPage,
    cardsPerPage,
    setCurrentPage,
    handelGetCards,
    ...rest
  } = useCards();

  const onDeleteCard = async (CardId) => {
    await rest.handelDeleteCard(CardId);
    await handelGetCards();
  };

  //Get Current Cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards && filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    handelGetCards();
  }, []);

  return (
    <Box>
      <PageHeader title="Cards" description="All of the business Cards in one page" />
      <CardsFeedback loading={loading} error={error} cards={currentCards} onDeleteCard={onDeleteCard} />
      <GlobalPagination cardsPerPage={cardsPerPage} totalCards={cards && cards.length} paginate={paginate} />
    </Box>
  );
};

export default CardsPage;
