import axios from "axios";
import.meta.env.VITE_XXX; // Vite environment variables

const apiURL = import.meta.env.VITE_API_URL || "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (user) => {
  try {
    const response = await axios.post(`${apiURL}/login`, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signUp = async (user) => {
  try {
    const response = await axios.post(`${apiURL}`, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${apiURL}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteUser = async (UserId) => {
  try {
    const response = await axios.delete(`${apiURL}/${UserId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
