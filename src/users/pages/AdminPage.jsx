import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import UsersPage from "./UsersPage";

const AdminPage = () => {
  return (
    <Box>
      <PageHeader title="Admin panel" description="Customer Relationship Management Page" />
      <UsersPage />
    </Box>
  );
};

export default AdminPage;
