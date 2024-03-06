import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import PropTypes from "prop-types";
import UsersTable from "./UsersTable";

function UserFeedback({ users, loading, error, onDeleteUser }) {
  if (loading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (users && !users.length) return <p style={{ padding: "30px", fontWeight: "500" }}>Oops, there are no users to show</p>;
  if (users && !!users.length) return <UsersTable users={users} onDeleteUser={onDeleteUser} />;
}

UserFeedback.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onDeleteUser: PropTypes.func.isRequired,
};

export default UserFeedback;
