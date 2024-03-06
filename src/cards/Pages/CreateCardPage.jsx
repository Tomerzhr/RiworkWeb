import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForm/initialForm";
import cardSchema from "../models/joiSchema/CardSchema";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardForm from "../components/CardForm";

function CreateCardPage() {
  const { handelCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, handelCreateCard);

  if (!user || !user.isBusiness) return <Navigate to="/cards" />;
  return (
    <Box>
      <PageHeader title="Create Card" description="Create your business card" />
      <CardForm
        title="Create Card"
        data={value.data}
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.error}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
      />
    </Box>
  );
}

export default CreateCardPage;
