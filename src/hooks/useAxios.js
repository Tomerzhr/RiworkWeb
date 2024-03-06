import axios from "axios";
import { useSnackbar } from "../providers/SnackBarProvider";
import { useUser } from "../users/providers/UserProviders";
import { useEffect } from "react";

const useAxios = () => {
  const snackBar = useSnackbar();
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    // axios.defaults.headers.common.Authorization = token;

    if (snackBar) {
      axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
      }, null);
      axios.interceptors.response.use(null, (error) => {
        const expectedError = error.response && error.response.status >= 400;
        if (expectedError) snackBar("error", error.response.data);

        return Promise.reject(error);
      });
    }
  }, [token, snackBar]);
};

export default useAxios;
