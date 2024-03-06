import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProviders";
import useAxios from "../../hooks/useAxios";
import { login, signUp } from "../services/userApiService";
import { removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { getUser } from "../services/localStorageService";
import ROUTS from "../../routes/routsModel";
import normalizeUser from "../normalization/normalizeUser";
import { useSearchParams } from "react-router-dom";
import { getAllUsers } from "../services/userApiService";
import { deleteUser } from "../services/userApiService";
import { useSnackbar } from "../../providers/SnackBarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);

  const navigate = useNavigate();

  const { user, setUser, setToken } = useUser();
  const snackBar = useSnackbar();

  const [query, setQuery] = useState({ q: "", isBusiness: false });
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery({
      q: searchParams.get("q") ?? "",
      isBusiness: searchParams.get("isBusiness"),
    });
  }, [searchParams]);

  useEffect(() => {
    if (users) {
      const filtered = users.filter(
        (user) =>
          (user.name.first.toLowerCase().includes(query.q) || user.name.last.includes(query.q)) &&
          (!query.isBusiness || query.isBusiness == String(user.isBusiness))
      );
      setFilteredUsers(filtered);
    }
  }, [query, users]);

  useAxios();

  const requestStatus = useCallback(
    (users, loading, errorMessage, user = null) => {
      setUsers(users);
      setLoading(loading);
      setError(errorMessage);
      setUser(user);
    },
    [setUser]
  );

  const handelLogin = useCallback(
    async (user) => {
      try {
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const loggedUser = getUser();
        requestStatus(null, false, null, loggedUser);
        navigate(ROUTS.CARDS);
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handelLogout = useCallback(() => {
    removeToken();
    setUser(null);
    setToken(null);
  }, [setUser, setToken]);

  const handelSignUp = useCallback(
    async (user) => {
      try {
        const normalizedUser = normalizeUser(user);
        await signUp(normalizedUser);
        await handelLogin({ email: user.email, password: user.password });
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [handelLogin, requestStatus]
  );

  const handelGetAllUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getAllUsers();
      requestStatus(users, false, null, user);
    } catch (error) {
      requestStatus(null, false, error.message);
    }
  }, [requestStatus, user]);

  const handelDeleteUser = useCallback(
    async (id) => {
      try {
        setLoading(true);
        await deleteUser(id);
        snackBar("success", "User deleted successfully");
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [requestStatus, snackBar]
  );

  return {
    users,
    user,
    loading,
    error,
    filteredUsers,
    currentPage,
    usersPerPage,
    setCurrentPage,
    handelDeleteUser,
    handelGetAllUsers,
    handelSignUp,
    handelLogin,
    handelLogout,
  };
};

export default useUsers;
