import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import MemoizedForm from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTS from "../../routes/routsModel";
import contactSchema from "./models/joiSchema";
import initialContact from "./helpers/initialContact";
import { useSnackbar } from "../../providers/SnackBarProvider";

function Contact() {
  const handelSignUp = () => {
    console.log({ data: value.data });
    rest.handleReset();
    snackBar("success", "Thank you for your message, we will get back to you soon.");
  };

  const snackBar = useSnackbar();
  const { value, ...rest } = useForm(initialContact, contactSchema, handelSignUp);

  return (
    <Box>
      <PageHeader title="Contact" description="Please fill in the form below with your personal information and click on the Sign Up button." />
      <MemoizedForm
        title="Contact"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        to={ROUTS.HOME}
        style={{ width: "80%", padding: "50px 30px 70px 30px" }}>
        <Input label="First Name" name="first" data={value.data} handleChange={rest.handleChange} error={value.error.first} sm={6} />
        <Input label="Last Name" name="last" data={value.data} handleChange={rest.handleChange} error={value.error.last} sm={6} />
        <Input label="Email" name="email" data={value.data} handleChange={rest.handleChange} error={value.error.email} />
        <Input label="Phone" name="phone" data={value.data} handleChange={rest.handleChange} error={value.error.phone} />
        <Input label="Message" name="message" rows={7} data={value.data} handleChange={rest.handleChange} error={value.error.message} />
      </MemoizedForm>
    </Box>
  );
}

export default Contact;
