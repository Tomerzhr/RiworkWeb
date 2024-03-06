import useUsers from "../hooks/useUsers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTS from "../../routes/routsModel";
import UserFeedback from "../components/UserFeedback";
import { Box } from "@mui/material";
import GlobalPagination from "../../components/GlobalPagination";

function UsersPage() {
  const navigate = useNavigate();
  const { user, users, loading, error, handelGetAllUsers, currentPage, usersPerPage, setCurrentPage, ...rest } = useUsers();

  //Get Current Cards
  const indexOfLastCard = currentPage * usersPerPage;
  const indexOfFirstCard = indexOfLastCard - usersPerPage;
  const currentUsers = users && users.slice(indexOfFirstCard, indexOfLastCard);

  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onDeleteUser = async (userId) => {
    await rest.handelDeleteUser(userId);
    await handelGetAllUsers();
  };

  useEffect(() => {
    if (user && !user.isAdmin) {
      navigate(ROUTS.LOGIN);
    } else {
      handelGetAllUsers();
    }
  }, []);

  return (
    <>
      <Box sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
        <UserFeedback loading={loading} error={error} users={currentUsers} onDeleteUser={onDeleteUser} />;
        <GlobalPagination cardsPerPage={usersPerPage} totalCards={users && users.length} paginate={paginate} />
      </Box>
      <Box sx={{ display: { sm: "block", xs: "block", md: "none" }, padding: "30px" }}>
        <h4>Sorry, this option available only in desktop mode.</h4>
      </Box>
    </>
  );
}

export default UsersPage;
