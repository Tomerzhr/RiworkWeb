import { Navigate } from "react-router-dom";
import ROUTS from "../../routes/routsModel";
import PageHeader from "../../components/PageHeader";
import { Box } from "@mui/material";
import { useUser } from "../providers/UserProviders";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import InitialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joiSchema/loginSchema";
import Input from "../../forms/components/Input";
import MemoizedForm from "../../forms/components/Form";

const LoginPage = () => {
  const { user } = useUser();
  const { handelLogin } = useUsers();
  const { value, ...rest } = useForm(InitialLoginForm, loginSchema, handelLogin);

  if (user) {
    return <Navigate replace to={ROUTS.CARDS} />;
  } else {
    return (
      <Box>
        <PageHeader
          title="Welcome to Riwork"
          description="In order to login, please fill in the form below with your personal information and click on the Login button."
        />
        <MemoizedForm
          title="login"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          to={ROUTS.HOME}
          style={{
            width: "70%",
            padding: "50px 30px 70px 30px",
          }}>
          <Input label={"Email"} name={"email"} type={"email"} data={value.data} error={value.error.email} handleChange={rest.handleChange} />
          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            data={value.data}
            error={value.error.password}
            handleChange={rest.handleChange}
          />
        </MemoizedForm>
      </Box>
    );
  }
};

export default LoginPage;
