import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import PropTypes, { arrayOf } from "prop-types";
import cardType from "../models/types/CardType";

const CardsFeedback = ({ loading, error, cards, onDeleteCard, onLikeCard }) => {
  if (loading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length) return <p style={{ padding: "30px", fontWeight: "500" }}>Oops, there are no cards to show</p>;
  if (cards && !!cards.length) return <Cards cards={cards} onDeleteCard={onDeleteCard} onLikeCard={onLikeCard} />;
};

CardsFeedback.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  cards: arrayOf(cardType),
  onDeleteCard: PropTypes.func,
  onLikeCard: PropTypes.func.isRequired,
};

CardsFeedback.defaultProps = {
  onLikeCard: async () => {},
  onDeleteCard: async () => {},
};

export default CardsFeedback;
