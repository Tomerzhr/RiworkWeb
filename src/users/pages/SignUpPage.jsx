import { Navigate } from "react-router-dom";
import ROUTS from "../../routes/routsModel";
import PageHeader from "../../components/PageHeader";
import { Box, FormControlLabel } from "@mui/material";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import Input from "../../forms/components/Input";
import MemoizedForm from "../../forms/components/Form";
import { useUser } from "../providers/UserProviders";
import initialSignUpForm from "../helpers/initialSignUpForm";
import SignUpSchema from "../models/joiSchema/signUpSchema";
import { Grid, Checkbox } from "@mui/material";

const SignUpPage = () => {
  const { handelSignUp } = useUsers();
  const { value, ...rest } = useForm(initialSignUpForm, SignUpSchema, handelSignUp);
  const { user } = useUser();

  if (user) {
    return <Navigate replace to={ROUTS.HOME} />;
  }

  return (
    <Box>
      <PageHeader
        title="Sign Up"
        description="In order to register, please fill in the form below with your personal information and click on the Sign Up button."
      />
      <MemoizedForm
        title="Sign Up"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        to={ROUTS.HOME}
        style={{
          width: "70%",
          padding: "50px 30px 70px 30px",
        }}>
        <Input label="First Name" name="first" data={value.data} handleChange={rest.handleChange} error={value.error.first} sm={6} />
        <Input label="Last Name" name="last" data={value.data} handleChange={rest.handleChange} error={value.error.last} sm={6} />
        <Input label="middle" name="middle" data={value.data} handleChange={rest.handleChange} error={value.error.middle} sm={6} />
        <Input label="Email" name="email" data={value.data} handleChange={rest.handleChange} error={value.error.email} />
        <Input label="Password" name="password" type="password" data={value.data} handleChange={rest.handleChange} error={value.error.password} />
        <Input label="Phone" name="phone" data={value.data} handleChange={rest.handleChange} error={value.error.phone} />
        <Input label="City" name="city" data={value.data} handleChange={rest.handleChange} error={value.error.city} />
        <Input label="Street" name="street" data={value.data} handleChange={rest.handleChange} error={value.error.street} />
        <Input label="House Number" name="houseNumber" data={value.data} handleChange={rest.handleChange} error={value.error.houseNumber} />
        <Input label="Zip" name="zip" data={value.data} handleChange={rest.handleChange} error={value.error.zip} />
        <Input label="State" name="state" data={value.data} handleChange={rest.handleChange} error={value.error.state} />
        <Input label="Country" name="country" data={value.data} handleChange={rest.handleChange} error={value.error.country} />
        <Input label="Image Url" name="url" data={value.data} handleChange={rest.handleChange} error={value.error.url} />
        <Input label="Image Description" name="alt" data={value.data} handleChange={rest.handleChange} error={value.error.alt} />
        <Grid item>
          <FormControlLabel
            onChange={(e) => rest.setData({ ...value.data, isBusiness: !!e.target.checked })}
            name="isBusiness"
            control={<Checkbox value={value.data.isBusiness} color="primary" />}
            label="Signup as business"></FormControlLabel>
        </Grid>
      </MemoizedForm>
    </Box>
  );
};

export default SignUpPage;
