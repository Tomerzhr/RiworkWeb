import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForm/initialForm";
import cardSchema from "../models/joiSchema/CardSchema";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardForm from "../components/CardForm";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useEffect } from "react";
import ROUTS from "../../routes/routsModel";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import { useState } from "react";

function CardEditPage() {
  const [initialForm, setInitialForm] = useState(initialCardForm);
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { handelUpdateCard, handelGetCard } = useCards();

  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => handelUpdateCard(cardId, normalizeCard(value.data)));

  const { user } = useUser();

  useEffect(() => {
    handelGetCard(cardId).then((data) => {
      if (user._id !== data.user_id) navigate(ROUTS.CARDS);
      const modeledCard = mapCardToModel(data);
      setInitialForm(modeledCard);
      rest.setData(modeledCard);
    });
  }, []);

  return (
    <Box>
      <PageHeader title="Create Card" description="Create your business card" />
      <CardForm
        title="Update Card"
        data={value.data}
        onSubmit={rest.onSubmit}
        onReset={() => rest.setData(initialForm)}
        errors={value.error}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
      />
    </Box>
  );
}
export default CardEditPage;
