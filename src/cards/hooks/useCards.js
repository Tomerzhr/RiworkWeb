import { useCallback, useEffect, useMemo, useState } from "react";
import { getCard, getCards, getMyCards, createCard, editCard, deleteCard, changeLikeStatus } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackBarProvider";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTS from "../../routes/routsModel";
import { useUser } from "../../users/providers/UserProviders";

const useCards = () => {
  const snackBar = useSnackbar();
  const navigate = useNavigate();

  const { user } = useUser();

  const [card, setCard] = useState(null);
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      const filtered = cards.filter(
        (card) =>
          card.title.toLowerCase().includes(query.toLowerCase()) ||
          card.description.toLowerCase().includes(query.toLowerCase()) ||
          String(card.bizNumber).includes(query)
      );
      setFilteredCards(filtered);
    }
  }, [query, cards]);

  const requestStatus = (card, cards, loading, error) => {
    setLoading(loading), setError(error), setCard(card), setCards(cards);
  };

  useAxios();

  const handelGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      snackBar("success", "Cards loaded successfully");
      requestStatus(null, cards, false, null);
    } catch (error) {
      snackBar("error", error.message);
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelGetCard = useCallback(async (id) => {
    try {
      setLoading(true);
      const card = await getCard(id);
      requestStatus(card, null, false, null);
      return card;
    } catch (error) {
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(null, cards, false, null);
    } catch (error) {
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelDeleteCard = useCallback(async (id) => {
    try {
      setLoading(true);
      await deleteCard(id);
      snackBar("success", "Card deleted successfully");
    } catch (error) {
      snackBar("error", error.message);
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const normalizedCard = normalizeCard(cardFromClient);
      const card = await createCard(normalizedCard);
      requestStatus(card, null, false, null);
      snackBar("success", "Card created successfully");
      navigate(ROUTS.MY_CARDS);
    } catch (error) {
      snackBar("error", error.message);
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(card, null, false, null);
      snackBar("success", "Card updated successfully");
      navigate(ROUTS.MY_CARDS);
    } catch (error) {
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelLikeCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      requestStatus(card, cards, false, null);
    } catch (error) {
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const handelGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => !!card.likes.find((id) => id === user._id));
      requestStatus(null, favCards, false, null);
    } catch (error) {
      requestStatus(null, null, false, error.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      cards,
      card,
      loading,
      error,
      filteredCards,
    }),
    [cards, card, loading, error, filteredCards]
  );

  return {
    value,
    currentPage,
    cardsPerPage,
    handelGetFavCards,
    setCurrentPage,
    handelGetCards,
    handelLikeCard,
    handelGetCard,
    handelGetMyCards,
    handelCreateCard,
    handelUpdateCard,
    handelDeleteCard,
  };
};

export default useCards;
